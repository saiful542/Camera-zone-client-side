import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";




const Login = () => {

    const [loginData, setLoginData] = useState({});

    const { GoogleSignIn, loginWithEmail, error } = useAuth() || {};
    const location = useLocation();
    const history = useHistory();
    const redirectLocation = location.state?.from || '/Home'
    const SignIn = () => {
        GoogleSignIn(history, redirectLocation)
    }

    const handleChange = (e) => {
        const field = e.target.type;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        loginWithEmail(loginData.email, loginData.password, history, redirectLocation);
        setLoginData({})

    }

    return (
        <div>
            <div className="d-flex  justify-content-center container-fluid">
                <div style={{ maxWidth: "30rem" }} className="w-100 shadow-lg bg-primary bg-opacity-25  my-5  rounded-3 animate__animated animate__fadeInLeft p-2" >
                    <h1>Please Login</h1>
                    <form onSubmit={onSubmit} className="text-center w-100">
                        <p className="text-danger">{error}</p>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input onChange={handleChange} type="email" className=" shadow form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input onChange={handleChange} type="password" className=" shadow form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary mt-3 mb-2 shadow w-25">Login</button>
                        <br />
                        <NavLink className="mx-3" to="/Registration">Don,t have an account?</NavLink>

                    </form>
                    <br />
                    <p>----------or---------</p>
                    <h3>By</h3><button className="btn btn-success w-50 mb-4 fw-bold  shadow" onClick={SignIn}><span><i className="fab fa-google me-5 fs-2"></i></span>Google</button>
                </div>
            </div>
            <div>
                <img className="mb-0 img-fluid" src="https://i.ibb.co/s9dg9B1/math-lf-Rlv3nuf78-unsplash.jpg" alt="" />

            </div>
        </div>
    );
};

export default Login;
