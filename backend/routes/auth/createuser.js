const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// create a user using: POST "/api/auth/createuser". No Login Required
router.post("/",[
        body("name", "Enter a valid name").isLength({ min: 3 }),
        body("email", "Enter a valid email").isEmail(),
        body("password", "Password must be atleast 5 characters").isLength({min: 5,}),
    ], async (req, res) => {
        // if there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success:false, errors: errors.array() });
        }

        try {
            // checking if user already exists or not
            let user = await User.findOne({ email: req.body.email });

            // if user already exists then sending response
            if (user) {
                return res.status(400).json({success:false,  error: "User already exists" })
            }

            // hashing the password
            const salt = await bcrypt.genSalt(10);
            const securedPassword = await bcrypt.hash(req.body.password, salt);

            // creating user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securedPassword
            });

            // it all information are correct then generating token
            const data = {
                user: {
                    id: user.id
                }
            }

            const authtoken = jwt.sign(data, process.env.JWT_SECRET_KEY);
            res.json({success:true, authtoken });

        } catch (error) { // error message if some error occures
            console.error(error.message);
            res.status(500).send("Some error occured");
        }
    }
);


module.exports = router;
