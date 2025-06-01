
import prisma from '@/utils/connect'
import { getAuthSession } from "@/utils/auth"
import { ApiResponse } from "@/utils/utils"

export const GET = async (req) => {

    const { searchParams } = new URL(req.url)

    const page = searchParams.get('page')
    const cat = searchParams.get('cat')

    const POST_PER_PAGE = 2
    const query = { take: POST_PER_PAGE, skip: POST_PER_PAGE * (page - 1), where: { ...(cat && { catSlug: cat }) } }

    try {
        const [posts, count] = await prisma.$transaction([prisma.post.findMany(query), prisma.post.count({ where: query.where })])
        return ApiResponse({ posts, count }, 200)
    } catch (error) {
        return ApiResponse({ message: 'Something went wrong' }, 500)
    }
}

//Create a blog 
export const POST = async (req) => {
    const session = await getAuthSession()
    if (!session) {
        return ApiResponse({ message: 'Not Authenticated' }, 401)
    }
    try {
        const body = await req.json()
        const post = await prisma.post.create({ data: { ...body, userEmail: session.user.email } })
        return ApiResponse({ post, status: 200 }, 200)
    } catch (error) {
        return ApiResponse({ message: 'Something went wrong: ' + error, status: 500 }, 500)
    }
}