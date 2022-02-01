const express = require("express");
const router = express.Router();
const Note = require("../../models/Note");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../../middleware/fetchuser");

router.post('/',fetchuser, [
    body('title', 'Enter a valid title.').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        console.log(req.body)
        const { title, description, tag } = req.body;
        const note = await Note.create({
            user: req.user.id,
            title: title,
            description: description,
            tag: tag
        });

        res.send(note)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
});

module.exports = router