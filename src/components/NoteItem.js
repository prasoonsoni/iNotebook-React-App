import React, { useContext } from 'react';
import noteContext from '../context/noteContext';

const NoteItem = (props) => {
    const { _id, title, description } = props.note;
    const context = useContext(noteContext);
    const {deleteNote} = context;
    return (
        <>
            <div className="col-md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <i class="far fa-trash-alt" onClick={()=>{deleteNote(_id)}}></i>
                        <i class="far fa-edit mx-3"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NoteItem;
