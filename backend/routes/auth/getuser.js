require('dotenv').config()
const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const fetchuser = require('../../middleware/fetchuser');

router.post('/',fetchuser, async (req, res) => {
    try {
        const userID = req.user.id;
        const user = await User.findById(userID).select('-password');
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some internal server occured.");
    }
});
module.exports = router;

