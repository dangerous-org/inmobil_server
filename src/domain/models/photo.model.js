import mongoose from 'mongoose';

const photoModel = new mongoose.Schema({
    url : [
        
    ],

    post : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
})