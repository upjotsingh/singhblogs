import { NextResponse } from "next/server"
import prisma from "@/utils/connect"
import { ApiResponse } from "@/utils/utils"

export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    const isPop = searchParams.get("isPop")


    try {
        let categories;
        if (isPop && isPop == "true") {

            categories = await prisma.category.findMany({ where: { isPop: true } })

        } else {

            categories = await prisma.category.findMany()

        }
        return ApiResponse(categories, 200)
    } catch (error) {
        return ApiResponse({ message: "Something went wrong" }, 500)
    }
}