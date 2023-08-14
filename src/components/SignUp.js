import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../images/vDHlc1gATvGuir2mwpUF_Y0uugH16L6gtYdVq.png";
import { Link, useNavigate } from "react-router-dom";
import { name } from "../action-creator";
import { useDispatch } from "react-redux";

const Signup = () => {

  let navigate = useNavigate();
  const Dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (e.target.password.value !== e.target.confirmpassword.value) {
      alert("Passwords don't match");
    }
    const NewRecord = { ...UserInfo };
    localStorage.setItem("Entry", JSON.stringify(NewRecord));
    Dispatch(name());

  };
  const handleinput = (e) => {
    setUserInfo({ ...UserInfo, [e.target.name]: e.target.value });
  };
  const [UserInfo, setUserInfo] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    InitialDeposit: "",
  });

  return (
    <>
      <div className="container my-5">
        <img src={logo} alt="" style={{ height: "80px" }} /> &nbsp;Gullak Bank
        <h4 className="mt-4">Welcome to Gullak Bank!</h4>
        <div className="row align-items-center mt-5">
          <div className="col-lg-4 mx-auto my-auto text-center">
            <Form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="mb-3"
              >
                <Form.Control
                  name="Firstname"
                  type="text"
                  value={UserInfo.Firstname}
                  placeholder="First Name"
                  onChange={handleinput}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Last Name"
                className="mb-3"
              >
                <Form.Control
                  name="Lastname"
                  type="text"
                  value={UserInfo.Lastname}
                  placeholder="Last Name"
                  onChange={handleinput}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  name="email"
                  type="email"
                  value={UserInfo.email}
                  placeholder="name@example.com"
                  onChange={handleinput}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  name="password"
                  type="password"
                  value={UserInfo.password}
                  placeholder="Password"
                  onChange={handleinput}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Confirm Password"
                className="mb-3"
              >
                <Form.Control
                  id="re-pwd"
                  name="confirmpassword"
                  type="password"
                  value={UserInfo.confirmpassword}
                  placeholder="Confirm Password"
                  onChange={handleinput}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Initial Deposit"
                className="mb-3"
              >
                <Form.Control
                  name="InitialDeposit"
                  type="text"
                  value={UserInfo.InitialDeposit}
                  placeholder="Enter Amount in PKR"
                  onChange={handleinput}
                />
              </FloatingLabel>
              <Button
                variant="outline-success"
                className="col-md-4 mt-4"
                type="submit"
                onClick={()=>{navigate("/")}}
              >
                SignUp
              </Button>
            </Form>
            <div className="d-flex justify-content-center mt-3 letter-spacing">
              Already have an account?&nbsp;{" "}
              <Link
                variant="success"
                className="active"
                id="link"
                aria-current="page"
                to="/"
              >
                SignIn!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
