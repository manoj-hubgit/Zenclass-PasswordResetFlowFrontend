import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault()
    try {
        const response=await axios.post("http://localhost:5000/api/user/forget-password",{email})
        if(response.data.status===200){
            toast.success(response.data.message)
            navigate("/login")
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message)
    }
  
  }
  return (
    <div className="d-flex justify-content align-items-center bg-gradient">
      <div className="bg-white p-3 rounded w-28">
        <h4>Forget Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email Address</strong></label>
            <input type="email" className="form-control rounded-0" placeholder="Enter Your Email" id="email"  onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
