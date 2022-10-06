import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams }  from "react-router-dom";

export default function Home() {

    const [users,setUsers]=useState([]);

    const {id}=useParams();

    // open user information in console
    useEffect(()=>{
       loadUsers();
    },[])

    // loading user information in console
    const loadUsers= async ()=>{
        const result= await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    const deleteUser= async (id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }

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
                    users.map((user, index)=>(
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>View</Link>
                                <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
        <br></br>
        <hr></hr>
        <br></br>
        <Link className="btn btn-primary mx-2" to={`/recipes`}>Go To Recipes</Link>
        </div>
    </div>
  )
}



