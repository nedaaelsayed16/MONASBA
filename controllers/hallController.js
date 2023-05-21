import createError from "../utils/createError.js"
import Hall from "../models/hall.model.js" ;

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

export const deleteHall = async(req, res, next) => {}
export const getHall = async(req, res, next) => {}
export const getHalls = async(req, res, next) => {}