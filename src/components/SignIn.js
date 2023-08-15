import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from "../images/vDHlc1gATvGuir2mwpUF_Y0uugH16L6gtYdVq.png";
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {


let navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

       const entry = localStorage.getItem("Entry")
        let Login = JSON.parse(entry)
   if((Login.email !== e.target.email.value) || (Login.password !== e.target.password.value)){
             alert("Incorrect Details")
   }
   else{
          console.log("logged-in")
          navigate("/dashboard")
   }

    }
    const handleinput = (e)=>{
        setUserInfo({...UserInfo, [e.target.name]: e.target.value})
    }
   const [UserInfo, setUserInfo] = useState({
    email: "",
    password: ""
   })

  return (
    <>
    
    <div className="container mt-5 vh-90">
    <img src={logo} alt="" style={{ height: "80px" }} /> &nbsp;Gullak Bank
        <h4 className='mt-4'>Welcome to Gullak Bank!</h4>
        <div className="row align-items-center mt-5">
            <div className="col-lg-4 mx-auto my-auto text-center">
    <Form onSubmit={handleSubmit} >
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control name='email' type="email" value={UserInfo.email} placeholder="name@example.com" onChange={handleinput}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control name='password' type="password" value={UserInfo.password} placeholder="Password" onChange={handleinput}/>
      </FloatingLabel >
      <Button variant="outline-success" className="col-md-4 mt-4" type="submit">SignIn</Button>
      </Form>
      <div className='d-flex justify-content-center mt-3 letter-spacing'>Don't have an account?&nbsp; <Link variant="success" className="active" id='link' aria-current="page" to="/signup">Signup!</Link></div>
      </div>
      </div>
      </div>
      
    </>
  )
}

export default SignIn
