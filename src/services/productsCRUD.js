"use server"

import prisma from "@/utils/connection"

const { revalidatePath } = require("next/cache")

export const createUpdateProduct = async (formData, id) => {
    const name = formData.get("name")
    const description = formData.get("description")
    const price = parseInt(formData.get("price"))
    const categoryId = formData.get("category")

    let product

    try {
        if (!id) {
            product = await prisma?.product?.create({
                data: {name, description, price, categoryId}
            })
        } else {
            product = await prisma?.product?.update({
                where: {id},
                data: {name, description, price, categoryId}
            })
        }

        if (!product) {
            return {error: `Couldn't ${id ? "update" : "create"} product`}
        }

    } catch (error) {
        console.log(error.message)
        return {error: error.message}
    }

    revalidatePath("/dashboard/products")

    return {message: `Product ${id ? "updated" : "created"} successfully`}
} 


export const deleteProduct = async (id) => {
    let productDeleted

    try {
        productDeleted = await prisma?.product?.delete({
            where: {id}
        })
        if (!productDeleted) {
            return {error: "Couldn't delete product"}
        }
    } catch (error) {
        return {error: error.message}
    }

    revalidatePath("/dashboard/products")

    return {message: "Product deleted successfully"}
}