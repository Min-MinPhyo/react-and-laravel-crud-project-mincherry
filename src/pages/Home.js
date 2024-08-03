import React,{useState,useEffect} from "react";
import {Link, useParams} from 'react-router-dom';
import http from '../http';
function Home(){

    const [users,setUsers]=useState([]);
    const {id}=useParams();


  useEffect(()=>{
    fetchAllUsers();
  },[]);



  const fetchAllUsers=()=>{
    http.get('/users')
    .then(res=>{
        setUsers(res.data)
    })
    
  } 

  const deleteUser=(id)=>{
    http.delete('/users/'+id)
    .then(res=>{
        fetchAllUsers()
    })
  }

     return(

        <div>
            <h1 className="text-info">Members</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-info">Number.</th>
                        <th>Name</th>
                        <th className="text-muted">Email</th>
                        <th className="d-flex justify-content-space-between">Action</th>

                    </tr>
                </thead>

                <tbody>
                    {users.map((user,index)=>(
               
                    <tr>
                        <td>{++index}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className="">
                            <Link className='btn btn-warning' to={{pathname:"/edit/"+user.id}}>Edit</Link>
                            <Link className="btn btn-success mx-3" to={{ pathname:"/view/"+user.id }}>View</Link>&nbsp;

                            <button type="button" className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>Delete</button>
                            

                        </td>

                    </tr>
                             
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home;