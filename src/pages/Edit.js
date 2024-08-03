import React,{useState,useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import http from '../http';

function Edit(){
    const [inputs,setInputs]=useState({});
    const [users,setUsers]=useState([]);


    const {id}=useParams();


    useEffect(()=>{
        fetchUser();
    },[])

    const fetchUser=()=>{
        http.get('/users/'+id+'/edit')
        .then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email
            })
        })
    }


    const navigate=useNavigate();
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;


        setInputs(values=>({...values,[name]:value}))


    }

    const submitForm=()=>{
    
        // console.log(inputs);
        http.put('/users/'+id,inputs)
        .then((res)=>{
            navigate('/');

        })
    
    
    }

    return(

        <div className='mt-3'>
            <h2>Edit Page</h2>
            <div className='row'>

                <div className='row'>
                    <div className='col-sm-6'>

                        <div className='card p-4'>

                            <label>Name</label>
                            <input type='text' name='name' className='form-control mb-2'
                            value={inputs.name || ''}
                            onChange={handleChange}
                            />

                            <label>Email</label>
                            <input type='email' name='email' className='form-control mb-2'
                            
                            value={inputs.email || ''}
                            onChange={handleChange}
                            />


                            <button type='button' onClick={submitForm} className='btn btn-primary mt-3'>Update</button>
                            







                        </div>
                        
                        
                        
                        
                        
                        </div> 
                </div>


            </div>
          
        </div>

        
    )
}
export default Edit;