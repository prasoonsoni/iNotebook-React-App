const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// create a user using: POST "/api/auth/createuser". No Login Required
router.post(
    "/createuser",
    [
        body("name", "Enter a valid name").isLength({ min: 3 }),
        body("email", "Enter a valid email").isEmail(),
        body("password", "Password must be atleast 5 characters").isLength({
            min: 5,
        }),
    ],
    async (req, res) => {
        // if there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // check whether the user with same email exists already
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "User already exists" })
            }
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            res.json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Some error occured");
        }

    }
);

module.exports = router;
