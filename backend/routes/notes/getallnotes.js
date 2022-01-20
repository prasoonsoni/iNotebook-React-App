const express = require('express');;
const router = express.Router();
const fetchuser = require('../../middleware/fetchuser');
const Note = require('../../models/Note');

router.get('/', fetchuser, async (req, res) => {
    try {
        const userID = req.user.id;
        const notes = await Note.find({ user: userID });
        res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }

})

module.exports = router