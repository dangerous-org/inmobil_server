import {createPostService, getPostService} from '../services/post.service.js'
export const CreatePost = async (req,res) => {
    try {
        const postData = req.body;
        const postPhotos = req.files;
        const Post = await createPostService(postData,postPhotos);
        return res.status(201).json({message:"post created", Post})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    try {
        const {termino} = req.body;
        const Post = await getPostService(termino);
        return res.status(200).json(Post);
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
}