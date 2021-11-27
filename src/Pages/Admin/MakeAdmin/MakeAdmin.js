import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [isAdmin, setIsAdmin] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://mighty-thicket-32319.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data.admin))
            .finally(() => {
                setIsLoading(false)
            })
    }, [user, isLoading])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.role = 'admin';
        if (isAdmin) {
            axios.put(`https://mighty-thicket-32319.herokuapp.com/users`, data)
                .then(res => {
                    if (res.data) {
                        alert('admin added.')
                        reset()   //reset form
                    }
                })
        }
        else{
            alert('request denied . you must need the access of an admin')
            reset();
        }
    }
    return (
        <div>
            <h1 className="p-1 w-100 bg-primary bg-opacity-25 mb-0 fw-bold shadow">Make Admin</h1>
            <div >
                <div >
                    <form className=" d-flex flex-column  py-4 align-items-center my-5 text-dark " onSubmit={handleSubmit(onSubmit)}>


                        <div className="d-flex  align-items-center w-100 justify-content-around  " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input type="email" className="my-2 ms-1 w-50 p-2 rounded-3 shadow"  {...register("email")} required placeholder="new admin's email" /></div>


                        <div className="d-flex  align-items-center w-100 justify-content-around  " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Password&nbsp;&nbsp;</h4><input type="password" className="shadow my-2 ms-1 w-50 p-2 rounded-3"  {...register("password")} required placeholder="new admin's password" /></div>


                        <button className="btn btn-warning mt-5 fw-bolder">
                            Make admin
                        </button>
                    </form>
                </div>
                <div>
                    <img className="mb-0 img-fluid" src="https://i.ibb.co/s9dg9B1/math-lf-Rlv3nuf78-unsplash.jpg" alt="" />

                </div>

            </div>
        </div>
    );
};

export default MakeAdmin;