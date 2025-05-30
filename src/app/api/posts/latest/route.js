import { NextResponse } from "next/server"
import prisma from '@/utils/connect'

export const GET = async () => {

    try {
        const post = await prisma.post.findFirst({
            orderBy: { createdAt: 'desc' },
            include: { user: true }
        });

        return new NextResponse(JSON.stringify(post, { status: 200 }))
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }, { status: 500 }))
    }
}