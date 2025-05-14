import { v2 as cloudinary } from "cloudinary";



export const destroyImg = (pub_id, result) => {
    cloudinary.config({
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
        api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    });
    cloudinary.uploader.destroy(pub_id).then((res) => result(res));
}