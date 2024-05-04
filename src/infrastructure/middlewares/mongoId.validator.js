import {Types} from "mongoose"

const isValidId = async (req,res,next) => {
    const {id} = req.query;
    if(!Types.ObjectId.isValid(id)){
        return res.status(400).json({message : "This is not a Mongo ID"})
    }
    next();
}

export default isValidId;