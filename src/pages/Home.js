import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams }  from "react-router-dom";
import { CircularProgress } from '@mui/material';

export default function Home() {

    const [persons,setPersons]=useState([]);
    const [isFetched,setisFetched]=useState(false);

    const {id}=useParams();

    // open user information in console
    useEffect(()=>{
       loadPersons();
    },[])

    // loading user information in console
    const loadPersons= async ()=>{
        const result= await axios.get("https://s3-ip-backend.azurewebsites.net/persons");
        setPersons(result.data);
        setisFetched(true);
    }

    const deletePerson= async (id)=>{
        await axios.delete(`https://s3-ip-backend.azurewebsites.net/person/${id}`);
        loadPersons();
    }

    if(!isFetched) return(

        <div> 
            <CircularProgress />
        </div>
    );
    return (
    <div className="container">
        <div className="py-4">
        <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>

                {
                    // creates new array from calling a function for every array element
                    persons.map((person, index)=>(
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{person.name}</td>
                            <td>{person.username}</td>
                            <td>{person.email}</td>
                            <td>
                                <Link className="btn btn-primary mx-2" to={`/viewperson/${person.id}`}>View</Link>
                                <Link className="btn btn-outline-primary mx-2" to={`/editperson/${person.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={()=>deletePerson(person.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
        <br></br>
        <hr></hr>
        <br></br>
        <Link className="btn btn-outline-warning mx-2" to={`/recipes`}>Go To Recipes</Link>
        </div>
    </div>
  )
}



