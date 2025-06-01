
import prisma from '@/utils/connect'
import { ApiResponse } from "@/utils/utils";

export const GET = async () => {

    try {
        const post = await prisma.post.findFirst({
            orderBy: { createdAt: 'desc' },
            include: { user: true }
        });

        return ApiResponse(post, 200)
    } catch (error) {
        console.log(error)
        return ApiResponse({ message: "Something went wrong" }, 500)
    }
}