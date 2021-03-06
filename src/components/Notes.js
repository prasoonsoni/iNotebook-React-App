import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        } else {
            navigate('/login')
        }
    });

    const [note, setNote] = useState({
        id: "",
        etitle: "",
        edescription: "",
        etag: "",
    });

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag,
        });

    };
    const ref = useRef(null);
    const refClose = useRef(null);

    const handleClick = () => {
        editNote(note.id, note.etitle, note.edescription, note.etitle);
        refClose.current.click();
        console.log("update note clicked");
        props.showAlert("Note updated successfully", "success")
    };
    const handleOnChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                ref={ref}
                data-toggle="modal"
                data-target="#exampleModal"
                style={{ display: "none" }}
            >
                Edit Note
            </button>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit Note
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="form-group">
                                    <label htmlFor="etitle">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={note.etitle}
                                        id="etitle"
                                        name="etitle"
                                        placeholder="Enter title"
                                        onChange={handleOnChange}
                                        minLength={5}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="edescription">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={note.edescription}
                                        id="edescription"
                                        name="edescription"
                                        placeholder="Enter description"
                                        onChange={handleOnChange}
                                        minLength={5}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="etag">Tag</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={note.etag}
                                        id="etag"
                                        name="etag"
                                        placeholder="Enter tag"
                                        onChange={handleOnChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                ref={refClose}
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleClick}
                                disabled={note.etitle.length<5 || note.edescription.length<5}
                            >
                                Update Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-3">
                <h2>Your Notes</h2>
                {notes.length === 0 && "No notes to display!!"}
            </div>
            <div className="container row my-3">
                {  notes.map((note) => {
                    return (
                        <NoteItem showAlert={props.showAlert} key={note._id} updateNote={updateNote} note={note} />
                    );
                })}
            </div>
        </>
    );
};

export default Notes;
