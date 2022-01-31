import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/noteContext";
import NoteItem from "./NoteItem";

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote, getNotes } = context;
    const [note, setNote] = useState({title:"", description:"", tag:""});
    const handleClick = (e)=>{
        e.preventDefault()
        addNote(note.title, note.description, note.tag);
    };
    const onChange = (e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    }
    useEffect(()=>{
        getNotes();
    })
    return (
        <div className="container my-3">
            <h2>
                Add Note
            </h2>

            <form className="my-3">
                <div class="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" class="form-control" id="title" name="title" placeholder="Enter title" onChange={onChange} />
                </div>
                <div class="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" class="form-control" id="description" name="description" placeholder="Enter description" onChange={onChange}/>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    );
};

export default AddNote;
