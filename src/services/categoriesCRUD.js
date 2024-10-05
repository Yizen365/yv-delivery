"use server"

import prisma from "@/utils/connection"
import { revalidatePath } from "next/cache"

export const createUpdateCategory = async (formData, image, id) => {
    const name = formData.get("name")

    if (!name || !image) {
        return {error: "Please fill out all fields"}
    }

    let category

    try {
        if (!id) {
            category = await prisma?.category?.create({
                data: {name, image},
            })    
        } else {
            category = await prisma?.category?.update({
                where: {id},
                data: {name, image}
            })
        }
        
        if (!category) {
            return {error: `Couldn't ${id ? "update" : "create"} category`}
        }

    } catch (error) {
        return {error: `Error: ${error.message}`}
    }
    revalidatePath("/dashboard/categories")
    
    return {result: category}
}


export const deleteCategory = async (id) => {
    let categoryDeleted
    
    try {
        categoryDeleted = await prisma?.category?.delete({
            where: {id}
        })

        if (!categoryDeleted) {
            return {error: "Couldn't delete category"}
        }
    } catch (error) {
        return {error: `Error: ${error.message}`}
    }
    revalidatePath("/dashboard/categories")
    
    return {message: "Category deleted successfully"}
}