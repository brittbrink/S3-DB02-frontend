import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddPerson() {
    
    let navigate=useNavigate();

    // Store information in this state
    const [person, setPerson]=useState({
        name:"",
        username:"",
        email:"",
    });

    const {name, username, email}=person;

    // Function
    const onInputChange=(event)=>{
        
        // Keeps adding new objects
        setPerson({...person, [event.target.name]: event.target.value});

    };

    const onSubmit= async (event)=>{
        event.preventDefault();
        await axios.post("https://s3-ip-backend.azurewebsites.net/person", person);
        navigate("/");
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register Person</h2>

                <form onSubmit={(event)=>onSubmit(event)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input type={"text"} className="form-control" placeholder="Enter your name" name="name" value={name} onChange={(event)=>onInputChange(event)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Username" className="form-label">
                            Username
                        </label>
                        <input type={"text"} className="form-control" placeholder="Enter your username" name="username" value={username} onChange={(event)=>onInputChange(event)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            E-mail
                        </label>
                        <input type={"text"} className="form-control" placeholder="Enter your e-mail address" name="email" value={email} onChange={(event)=>onInputChange(event)}></input>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">
                        Submit
                    </button>

                    <Link className="btn btn-outline-danger mx-2" to="/">
                        Cancel
                    </Link>
                </form>

            </div>
        </div>
    </div>
  )
}
