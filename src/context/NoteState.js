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
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;