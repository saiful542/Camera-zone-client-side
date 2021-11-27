import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Registration = () => {
    const [registerData, setRegisterData] = useState({})
    const location = useLocation();
    const history = useHistory();
    const redirectLocation = location.state?.from || '/Home'
    const { Register,error } = useAuth()


    const handleChange = (e) => {
        const field = e.target.type;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData)

    }

    const onSubmit = (e) => {
        e.preventDefault();
        Register(registerData.email, registerData.password, registerData.text, history, redirectLocation);
    }
    return (
        <div>
            <div className="d-flex  justify-content-center container-fluid ">
                <div style={{ maxWidth: "30rem" }} className="w-100 bg-danger py-4 shadow-lg bg-opacity-25 my-5  rounded-3 animate__animated animate__fadeInRight" >
                    <h1>Registration</h1>
                    <form onSubmit={onSubmit} className="text-center p-2 w-100" id="form">
                        <p className="text-danger">{error}</p>
                        <div className="mb-3">
                            <label for="exampleInputdisplayName" className="form-label">Name</label>
                            <input onChange={handleChange} type="displayName" className=" shadow form-control" id="exampleInputdisplayName" aria-describedby="displayNameHelp" required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input onChange={handleChange} type="email" className=" shadow form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input onChange={handleChange} type="password" className=" shadow form-control" id="exampleInputPassword1" required />
                        </div>

                        <button type="submit" className="btn btn-primary mb-2 mt-5 shadow w-50">Register</button>
                        <br />
                        <NavLink className="mx-3" to="/Login">Already registered?</NavLink>
                    </form>
                </div>

            </div>
            <div>
                <img className="mb-0 img-fluid" src="https://i.ibb.co/s9dg9B1/math-lf-Rlv3nuf78-unsplash.jpg" alt="" />

            </div>
        </div>
    );
};

export default Registration;