import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    // get all notes
    const getNotes = async()=>{
        const response = await fetch(`${host}/api/notes/getallnotes`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type':'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlOTBiZDgxMWI4Y2FkZTMwMTE3ZDRiIn0sImlhdCI6MTY0MzYyODAxOX0.mFD8v0ky8Zd5hMcfvhuY2wcO5g5qF1qWMFL-L1XjSWs'
            }
        });
        const json = await response.json();
        setNotes(json)
    };

    // add a note
    const addNote = async (title, description, tag) => {
        const data = {title, description, tag}
        console.log(1)
        console.log(data);
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlOTBiZDgxMWI4Y2FkZTMwMTE3ZDRiIn0sImlhdCI6MTY0MzYyODAxOX0.mFD8v0ky8Zd5hMcfvhuY2wcO5g5qF1qWMFL-L1XjSWs'
            },
            body: JSON.stringify(data)
        });
        const note = await response.json();
        console.log(note);
    };


    // delete a note
    const deleteNote = async(id) => {
        // API CALL
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type':'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlOTBiZDgxMWI4Y2FkZTMwMTE3ZDRiIn0sImlhdCI6MTY0MzYyODAxOX0.mFD8v0ky8Zd5hMcfvhuY2wcO5g5qF1qWMFL-L1XjSWs'
            }
        });
        const json = response.json();
        console.log(json);
    };
    // edit a note

    const editNote = async (id, title, description, tag) => {
        // API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type':'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlOTBiZDgxMWI4Y2FkZTMwMTE3ZDRiIn0sImlhdCI6MTY0Mjc4NDQ1Mn0.w2zlTcQ6qtRZu_uMPNCDDSXTzAsGzFKZJGEYjUA4a5w'
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = response.json();
        console.log(json);
    };


    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;