
import prisma from '@/utils/connect'
import { ApiResponse } from "@/utils/utils"

//GET SINGLE POST
export const GET = async (req, { params }) => {
    const { slug } = params
    try {
        const post = await prisma.post.update({
            where: { slug },
            data: { views: { increment: 1 } },
            include: { user: true }
        })
        return ApiResponsee(post, 200)
    } catch (error) {
        return ApiResponse({ message: 'Something went wrong' }, 500)
    }
}