import React, { useContext, useEffect } from "react";
import noteContext from "../context/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes, addNote, getNotes } = context;
    useEffect(()=>{
        getNotes();
    })
    return (
        <>
            <h2>Your Notes</h2>
            <div className="row my-3">
                {notes.map((note) => {
                    return <NoteItem key = {note._id}note={note} />
                })}
            </div>
        </>

    );
};

export default Notes;
