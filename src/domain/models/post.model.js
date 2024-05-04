import mongoose from "mongoose";

const PostModel = new mongoose.Schema({

    title : {
        type : String,
        required : [true, 'El titulo es obligatorio']
    },

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

    location : {
        type : String,
        required : [true, 'La ubicacion es obligatoria']
    },

    photos : {
        type : [String],
        required : true
    },
    
    status : {
        type : String,
        required : [true,"El estado es obligatorio"]
    },

    price :{
        type : Number,
        required : [true,"El precio es obligatorio"]
    },

    dateBuilt :{
        type : Date
    },
    
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
})

const Post = mongoose.model('Post', PostModel);

export default Post;