export const defaultSession = {
    isLoggedIn: false
}

export const sessionOptions = {
    password: process.env.NEXT_PUBLIC_SECRET_KEY,
    cookieName: "yv_deli",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    },
}