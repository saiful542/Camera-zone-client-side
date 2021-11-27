import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const GiveReview = () => {
    const {user}=useAuth()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.reviewId=1;
        data.userImage=user.photoURL;
        axios.put('https://mighty-thicket-32319.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data) {
                    alert('Than you sir.')
                    reset()   //reset form
                }
            })
    }
    return (
        <div>
            <h1 className="p-1 w-100 bg-primary bg-opacity-25 mb-0 fw-bold">Review please!!</h1>
            <div >
                <form className=" d-flex flex-column  py-4 align-items-center my-5 text-dark " onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex  align-items-center w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input className=" shadow my-2 ms-1 w-50 p-2 rounded-3"  {...register("name")} value={user?.displayName}/></div>

                    <div className="d-flex  align-items-center  w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Rating&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input type="number" className=" shadow fw-bolder my-2 ms-1 w-50 p-2 rounded-3" {...register("rating")} placeholder="rate out of 5" required/></div>

                    <div className="d-flex  align-items-center w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input type="email" className=" shadow my-2 ms-1 w-50 p-2 rounded-3" {...register("email")} value={user.email} re/></div>

                    <div className="d-flex  align-items-center w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Comment</h4><textarea className=" shadow my-2 ms-1 w-50 p-2 rounded-3 fw-bolder" {...register("comment")} placeholder="comment please" required/></div>


                    <button className="btn btn-warning mt-5 fw-bolder">
                        Confirm!!
                    </button>
                </form>
            </div>
            <div>
                <img className="mb-0 img-fluid" src="https://i.ibb.co/s9dg9B1/math-lf-Rlv3nuf78-unsplash.jpg" alt="" />

            </div>
        </div>
    );
};

export default GiveReview;