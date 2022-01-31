import React from 'react';

const NoteItem = (props) => {
    const { title, description } = props.note;
    return (
        <>
            <div className="col-md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <i class="far fa-trash-alt"></i>
                        <i class="far fa-edit mx-3"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NoteItem;
