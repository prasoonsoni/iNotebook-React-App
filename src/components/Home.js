import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddNote from "./AddNote";
import Notes from "./Notes";

const Home = (props) => {
    return (
        <>
            <AddNote showAlert={props.showAlert}/>
            <Notes showAlert={props.showAlert}/>
        </>
    );
};

export default Home;
