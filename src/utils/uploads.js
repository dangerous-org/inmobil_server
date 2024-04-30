import {v2 as cloudinary} from 'cloudinary';
import path from "path";
import fs from "fs";

cloudinary.config({ 
  cloud_name: 'db7o301hd', 
  api_key: '626178166246491', 
  api_secret: 'ru5Ujb8-ARg5fvvftlgccsDbHQ8' 
});

export const uploadFile = async (file) => {
    const route = path.join(process.cwd(),file);
    const { secure_url } = await cloudinary.uploader.upload(route);
    return secure_url;
}

export const uploadFiles = async (files) => {
    const photos = [];
    for (const file of files) {
        const {tempFilePath} = file;
        const route = path.join(process.cwd(),tempFilePath);
        const {secure_url} = await cloudinary.uploader.upload(route);
        photos.push(secure_url);
        fs.unlinkSync(route);
    }
    return photos;
}

//https://res.cloudinary.com/db7o301hd/image/upload/v1709129123/rg84cr9ez4vsq1ilj05v.png
export const updateFile = async (file,postId) => {
    const [url] = await pool.query('select foto from productos where id = ?',[product_id]);
    const nombreArr = url[0].foto.split('/');
    const nombre = nombreArr[nombreArr.length-1];
    const [public_id] = nombre.split('.');
    cloudinary.uploader.destroy(public_id);
    return uploadFile(file);
}