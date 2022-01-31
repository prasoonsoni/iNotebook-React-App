import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
            "_id": "61e94b7ba15ca729079560af",
            "user": "61e90bd811b8cade30117d4b",
            "title": "Prasoon Soni",
            "description": "I love coding",
            "tag": "General",
            "__v": 0
        },
        {
            "_id": "61ead80a1619de4af7dab92a",
            "user": "61e90bd811b8cade30117d4b",
            "title": "C++",
            "description": "C++ is a very interesting language",
            "tag": "General",
            "__v": 0
        },
        {
            "_id": "61e94b7ba15ca729079560af",
            "user": "61e90bd811b8cade30117d4b",
            "title": "Prasoon Soni",
            "description": "I love coding",
            "tag": "General",
            "__v": 0
        },
        {
            "_id": "61ead80a1619de4af7dab92a",
            "user": "61e90bd811b8cade30117d4b",
            "title": "C++",
            "description": "C++ is a very interesting language",
            "tag": "General",
            "__v": 0
        },
        {
            "_id": "61e94b7ba15ca729079560af",
            "user": "61e90bd811b8cade30117d4b",
            "title": "Prasoon Soni",
            "description": "I love coding",
            "tag": "General",
            "__v": 0
        },
        {
            "_id": "61ead80a1619de4af7dab92a",
            "user": "61e90bd811b8cade30117d4b",
            "title": "C++",
            "description": "C++ is a very interesting language",
            "tag": "General",
            "__v": 0
        }
    ]

    

    const [notes, setNotes] = useState(notesInitial);

    // add a note
    const addNote = (title, description, tag)=>{
        //TODO : API CALL
        const note = {
            "_id": "61ead80a1619de4af7dab92a",
            "user": "61e90bd811b8cade30117d4b",
            "title": title,
            "description": description,
            "tag": tag,
            "__v": 0
        };
        setNotes(notes.concat(note));
    };
    // delete a note
    const deleteNote = (id)=>{
        const newNotes = notes.filter((note)=>{return note._id!==id});
        setNotes(notes.concat(newNotes));
    };
    // edit a note

    const editNote = (id, title, description, tag)=>{

    };
    return (
        <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;