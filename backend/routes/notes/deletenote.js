const express = require("express");
const router = express.Router();
const Note = require("../../models/Note");
const fetchuser = require("../../middleware/fetchuser");

router.delete('/:id', fetchuser, async (req, res) => {

    try {
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") };

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }

});

module.exports = router