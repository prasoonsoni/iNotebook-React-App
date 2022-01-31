import React, { useContext } from "react";
import noteContext from "../context/noteContext";

const Home = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
    return (
        <>
            <div className="container my-3">
                <h2>
                    Add Note
                </h2>

                <form className="my-3">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

            <div className="container my-3">
                <h2>
                    Your Notes
                    {notes.map((note)=>{
                        return note.title;
                    })}
                </h2>
            </div>
        </>
    );
};

export default Home;
