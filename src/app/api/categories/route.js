import { NextResponse } from "next/server"
import prisma from "@/utils/connect"

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
        return new NextResponse(JSON.stringify(categories, { status: 200 }))
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }, { status: 500 }))
    }
}