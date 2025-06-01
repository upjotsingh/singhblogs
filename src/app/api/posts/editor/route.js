
import prisma from '@/utils/connect'
import { ApiResponse } from "@/utils/utils";

export const GET = async () => {

    try {
        const posts = await prisma.post.findMany({ where: { pickByEditor: true }, include: { user: true } });

        return ApiResponse(posts, 200)
    } catch (error) {
        console.log(error)
        return ApiResponse({ message: "Something went wrong" }, 500)
    }
}