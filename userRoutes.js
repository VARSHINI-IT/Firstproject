import express from "express";
import { register } from "../controller/userController.js";

const userRoutes = express.Router();

//GET

//POST
userRoutes.post("/register",register)

//userRoutes.post("/register",(req,res) => {
    //const {name} = req.body;
    //res.status(200).json({data:`Welcome ${name}`})
//})

//PUT

//DELETE

export default userRoutes