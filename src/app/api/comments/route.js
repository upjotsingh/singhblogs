
import prisma from '@/utils/connect'
import { getAuthSession } from "@/utils/auth"
import { ApiResponse } from "@/utils/utils"

//GET ALL COMMENTS 
export const GET = async (req) => {
    const { searchParams } = new URL(req.url)

    const postSlug = searchParams.get("postSlug")

    try {

        const comments = await prisma.comment.findMany({
            where: postSlug ? { postSlug } : {},
            include: { user: true },
        });
        return ApiResponse(comments, 200)
    } catch (error) {
        return ApiResponse({ message: "Error: " + error }, 500)
    }
}

// POST A COMMENT
export const POST = async (req) => {
    const session = await getAuthSession()
    if (!session) {
        return ApiResponse({ message: 'Not Authenticated' }, 401)
    }
    try {
        const body = await req.json()
        const comment = await prisma.comment.create({ data: { ...body, userEmail: session.user.email } })
        return ApiResponse(comment, 200)
    } catch (error) {
        return ApiResponse({ message: 'Something went wrong - ' + error }, 500)
    }
}