const express = require("express");
const router = express.Router();
const Note = require("../../models/Note");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../../middleware/fetchuser");

router.put('/:id', fetchuser, async (req, res) => {

    try {
        const { title, description, tag } = req.body;

        // create newNote Object
        const newNote = {};
        if (title) {
            newNote.title = title;
        }
        if (description) {
            newNote.description = description;
        }
        if (tag) {
            newNote.tag = tag;
        }

        // find the note to be updates
        let note = await Note.findById(req.params.id);
        if (!note) { res.status(404).send("Not Found") };

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }

});

module.exports = router;