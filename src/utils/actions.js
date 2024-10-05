"use server"

import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { defaultSession, sessionOptions } from "./lib"
import prisma from "./connection"
import sendEmail from "@/services/sendEmail"
import bcrypt from 'bcrypt'
import { redirect } from "next/navigation"

function generateToken(length) {
    let result = ""
    const characterLength = process.env.NEXT_PUBLIC_CHARACTERS.length

    for (let i = 0; i < length; i++) {
        result += process.env.NEXT_PUBLIC_CHARACTERS.charAt(
            Math.floor(Math.random() * characterLength)
        )
    }

    return result
}


export const getSession = async () => {
    const session = await getIronSession(cookies(), sessionOptions)

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn
    }

    return session
}


export const register = async (formData, image) => {
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")
    const token = generateToken(32)

    if (password.length < 5) {
        return { error: "password must be atleast 5 characters long" }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma?.user?.findUnique({
        where: { email },
    })

    if (user && user.emailVerified) {
        return { error: "user already registered" }
    }

    const newUser = await prisma?.user?.upsert({
        where: { email },
        create: { name, email, password: hashedPassword, token, image },
        update: { token },
    })

    if (newUser) {
        await sendEmail(
            newUser.email,
            "Email Verification",
            `<p>Hello ${newUser.name} and welcome to YV Deliveries. This is your email verification token, Click here to verify your email: http://localhost:3000/verify/${token}</p>`
        )
        return { message: "Verify your email" }
    } else {
        return { error: "Something went wrong in email verification" }
    }
}


export const verifyEmail = async (getToken) => {
    if (getToken) {
        const user = await prisma?.user?.findUnique({
            where: {
                token: getToken
            },
        })

        if (user) {
            const verifiedUser = await prisma?.user?.update({
                where: { email: user.email },
                data: { emailVerified: true },
            })

            if (verifiedUser) {
                redirect("/login")
            }
        }
        else {
            return { error: "token expired" }
        }
    }
}


export const login = async (formData) => {
    const session = await getSession()

    const email = formData.get("email")
    const password = formData.get("password")

    const findUser = await prisma?.user?.findUnique({
        where: {email}
    })

    if (!findUser) {
        return {error: "user is not registered"}
    }

    const compare = await bcrypt.compare(password, findUser?.password)

    if (!compare) {
        return {error: "invalid credential"}
    }

    session.user = findUser
    session.isLoggedIn = true
    await session.save()

    redirect("/")
}