import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams }  from "react-router-dom";

export default function ViewPerson() {

    const [person, setPersons]= useState({
        name:"",
        username:"",
        email:"",
    });

    const {id}=useParams();

    useEffect(()=>{
        loadPerson();
    },[]);

    const loadPerson= async ()=>{
        const result = await axios.get(`http://localhost:8080/person/${id}`);
        setPersons(result.data);
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Person Details</h2>

                <div className="card">
                    <div className="card-header">
                        Details for person id: {person.id}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Name: </b>
                                {person.name}
                            </li>
                            <li className="list-group-item">
                                <b>Username: </b>
                                {person.username}
                            </li>
                            <li className="list-group-item">
                                <b>E-mail: </b>
                                {person.email}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
            </div>
        </div>
    </div>
  );
}

