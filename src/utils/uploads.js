import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from "fs";

cloudinary.config({
  cloud_name: "db7o301hd",
  api_key: "626178166246491",
  api_secret: "ru5Ujb8-ARg5fvvftlgccsDbHQ8",
});

export const uploadFile = async (file) => {
  const route = path.join(process.cwd(), file);
  const { secure_url } = await cloudinary.uploader.upload(route);
  fs.unlinkSync(route);
  return secure_url;
};

export const uploadFiles = async (files = []) => {
  if (!Array.isArray(files)) {
    const { tempFilePath } = files;
    return await uploadFile(tempFilePath);
  }
  const photos = [];
  for (const file of files) {
    const { tempFilePath } = file;
    const secure_url = await uploadFile(tempFilePath);
    photos.push(secure_url);
  }
  return photos;
};

export const updateFile = async (oldFiles, newFiles) => {
  try {
    if (Array.isArray(oldFiles)) {
      for (const file of oldFiles) {
        const nombreArr = file.split("/");
        const nombre = nombreArr[nombreArr.length - 1];
        const [public_id] = nombre.split(".");
        cloudinary.uploader.destroy(public_id);
      }
      return await uploadFiles(newFiles);
    }
    const nameArr = oldFiles.split("/");
    const name = nameArr[nameArr.length - 1];
    const [public_id] = name.split(".");
    cloudinary.uploader.destroy(public_id);
    return await uploadFile(newFiles);
  } catch (error) {
    throw new Error(error);
  }
};

// //https://res.cloudinary.com/db7o301hd/image/upload/v1709129123/rg84cr9ez4vsq1ilj05v.png
// export const updateFile = async (file,postId) => {
//     const [url] = await pool.query('select foto from productos where id = ?',[product_id]);
//     const nombreArr = url[0].foto.split('/');
//     const nombre = nombreArr[nombreArr.length-1];
//     const [public_id] = nombre.split('.');
//     cloudinary.uploader.destroy(public_id);
//     return uploadFile(file);
// }
