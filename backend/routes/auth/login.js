require('dotenv').config()
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', [
    body('email', 'Enter a valid e-mail.').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res)=>{

    // checking for errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    // destructuring body to get email and password
    const {email, password} = req.body;

    try {
        let user = await User.findOne({email});

        // Checking if user exists or not
        if(!user){
            return req.status(400).json({ error: "User with given E-Mail doesn't exists." });
        }

        // Matching password from database and entered by user
        const passwordMatches = await bcrypt.compare(password, user.password);

        // if password doesn't matches
        if(!passwordMatches){
            return req.status(400).json({ error: "Please enter correct password." });
        }

        // if all the provided information are correct creating token
        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data, process.env.JWT_SECRET_KEY);
        res.json({authtoken});

    } catch (error) { // if some error occures
        console.error(error.message);
        res.status(500).send("Some internal server occured.");
    }
});

module.exports = router;