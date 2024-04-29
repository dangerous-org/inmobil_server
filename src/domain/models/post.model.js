import mongoose from "mongoose";

const PostModel = new mongoose.Schema({
    description : {
        type : String,
        required : [true, 'La descripcion es obligatoria']
    },

    typeOffer : {
        type : String,
        required : true
    },

    createAt : {
        type : Date,
        default : Date.now 
    },

    ubicacion : {
        type : String,
        required : [true, 'La ubicacion es obligatoria']
    },

    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
})

const Post = mongoose.model('Post', PostModel);

export default Post;