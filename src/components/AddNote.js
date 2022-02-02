import React, { useContext, useState } from "react";
import noteContext from "../context/noteContext";

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (event) => {
        event.preventDefault();
        addNote(note.title, note.description, note.tag);
        // console.log(note)
        console.log("Add note clicked");
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Note added successfuly", "success");
    };
    const handleOnChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    };
    return (
        <>
            <div className="container my-3">
                <h2>Add Note</h2>
                <form className="my-3">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            placeholder="Enter title"
                            onChange={handleOnChange}
                            minLength={5}
                            required
                            value={note.title}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            placeholder="Enter description"
                            onChange={handleOnChange}
                            minLength={5}
                            required
                            value={note.description}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <input
                            type="text"
                            className="form-control"
                            id="tag"
                            name="tag"
                            placeholder="Enter tag"
                            onChange={handleOnChange}
                            value={note.tag}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleClick}
                        disabled={note.title.length<5 || note.description.length<5}
                    >
                        Add Note
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddNote;
