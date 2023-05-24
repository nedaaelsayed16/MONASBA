import createError from "../utils/createError.js"
import Hall from "../models/hall.model.js" ;
//import hallModel from "../models/hall.model.js";

export const createHall = async (req, res, next) =>{
    if(!req.isSeller)
    return next(createError(403, "only sellers can create hall!"));

    const newHall = new Hall({
        userId: req.userId,
        ...req.body,
    });
    try{
        const savedHall = await newHall.save();
        res.status(201).json(savedHall);
    } catch(err) {
        next(err);
    }
};

export const deleteHall = async(req, res, next) => {
    try{
        const hall = await Hall.findById(req.params.id);

        if (hall.userId !== req.userId)
        return next(createError(403, "you can delete only your hall!"));

        await Hall.findByIdAndDelete(req.params.id);
        res.status(200).send("Hall has been deleted!");

    }catch(err){
        next(err);
    }
};
export const getHall = async(req, res, next) => {
    try{
        const hall = await Hall.findById(req.params.id);
        if(!hall) next(createError(404, "Hall not found!"));
        res.status(200).send(hall);
    }catch(err){
        next(err);
    }
}
export const getHalls = async(req, res, next) => {
    try{

    }catch(err){
        next(err);
    }
}




//  git config --global user.email "you@example.com"
 // git config --global user.name "Your Name"