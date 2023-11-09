import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/User.js";



export const register = async (req, res, next) => {

try{
    
const salt = await bcrypt.genSalt(10);
const hashedPasscode = await bcrypt.hash(req.body.password, salt); 
const newUser = new User({...req.body, password: hashedPasscode });

await newUser.save();   
res.status(200).send("User has been created");

}catch (err){
next(err)
}

};

export const login = async(req, res) => {
    try {
        const loggedUser = await User.findOne({email: req.body.email});
        !loggedUser && res.status(404).json("wrong email");

        const validPasscode = bcrypt.compareSync(req.body.password, loggedUser.password);
        !validPasscode && res.status(400).json("wrong password");

        res.status(200).json(loggedUser);

    } catch (error) {

        console.log(error);
        res.status(500).json("user not found")
        
    }; 
};