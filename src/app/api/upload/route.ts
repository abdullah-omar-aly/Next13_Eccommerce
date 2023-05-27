import { NextRequest, NextResponse } from "next/server";

import pokemon from "@/pokemon.json";
import { S3Client } from '@aws-sdk/client-s3'
import multer from 'multer'
import multerS3 from 'multer-s3'


// const s3 = new S3Client({
//     region: (process.env.AWS_REGION),
//     credentials: {
//         accessKeyId: String(process.env.AWS_ACCESS_KEY),
//         secretAccessKey: String(process.env.AWS_SECRET_ACCESS_KEY)
//     }
// })

// export const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: process.env.AWS_S3_BUCKET_NAME!,
//         contentType: multerS3.AUTO_CONTENT_TYPE,

//         metadata: function (req, file, cb) {
//             // cb(null, {fieldName: file.fieldname , contentType: file.mimetype});
//             cb(null, { fieldName: file.fieldname });
//         },
//         key: function (req, file, cb) {
//             console.log(file)
//             cb(null, `assets-db/${Date.now().toString()}`)
//             // cb(null, `assets-db/${ Date.now().toString()+file.originalname}`)
//         }
//     })
// })
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: './public/upload',
//         filename: (req, file, cb) => cb(null, file.originalname),
//     }),
// });
const upload = multer({ dest: './public/uploads/' })
const lol = upload.single('avatar')

// const uploadMiddleware = upload.array('theFiles');


export async function POST(req: Request) {
    // const { searchParams } = new URL(req.url);
    // const name = searchParams.get("name");
    // const pokemonData = pokemon.filter((p) =>
    //     p.name.toLowerCase().includes(name?.toLowerCase() ?? "")
    // );
    // return NextResponse.json(pokemonData.slice(0, 10));

    
    await lol(req, NextResponse, function (err) {
        if (err instanceof multer.MulterError) {
            console.log("error print",err)
            // A Multer error occurred when uploading.
        } else if (err) {
            // An unknown error occurred when uploading.
        }

        // Everything went fine.
    })
    // //@ts-ignore
    console.log("file print" , req)


    return NextResponse.json({ name: 'moheammd' })
}
