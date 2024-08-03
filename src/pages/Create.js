import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import http from '../http';

function Create(){
    const [inputs,setInputs]=useState({});
    const navigate=useNavigate();
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;


        setInputs(values=>({...values,[name]:value}))


    }

    const submitForm=()=>{
    
        // console.log(inputs);
        http.post('/users',inputs)
        .then((res)=>{
            navigate('/');

        })
    
    
    }

    return(
        <div className="">
            <div className='row'>

                <div className='row'>
                    <div className='col-sm-6'>

                        <div className='card p-4'>

                            <label >Name</label>
                            <input type='text' name='name' className='form-control mb-2'
                            value={inputs.name || ''}
                            onChange={handleChange}
                            />

                            <label>Email</label>
                            <input type='email' name='email' className='form-control mb-2'
                            
                            value={inputs.email || ''}
                            onChange={handleChange}
                            />

                            

                            <label>Password</label>
                            <input type='password' name='password' className='form-control mb-2'
                             value={inputs.password || ''}
                             onChange={handleChange}
                            />


                            <button type='button' onClick={submitForm} className='btn btn-primary mt-3'>Create</button>
                            







                        </div>
                        
                        
                        
                        
                        
                        </div> 
                </div>


            </div>
          
        </div>

        
    )
}
export default Create;