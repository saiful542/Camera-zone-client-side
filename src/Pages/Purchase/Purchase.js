import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Purchase = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const [product, setProduct] = useState()
    useEffect(() => {
        fetch(`https://mighty-thicket-32319.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product,id])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.bookedId = id;
        data.image = user.photoURL;
        data.status = 'pending';
        data.PurchasedProduct = product.name;
        data.company = product.company;
        data.ProductImage = product.picture;
        axios.post('https://mighty-thicket-32319.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order placed successfully. you will get a confirmation soon ')
                    reset()   //reset form
                }
            })
    }

    return (
        <div>


            <h1 className="mt-5">Purchase</h1>
            <div >
                <form className=" d-flex flex-column  py-4 align-items-center my-5 text-dark " onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex  align-items-center w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input className="my-2 ms-1 w-50 p-2 rounded-3"  {...register("name")} value={user?.displayName}/></div>

                    <div className="d-flex  align-items-center  w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input type="number" className="my-2 ms-1 w-50 p-2 rounded-3" {...register("phone")} placeholder="number here" required /></div>

                    <div className="d-flex  align-items-center w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input type="email" className="my-2 ms-1 w-50 p-2 rounded-3" {...register("email")} value={user.email} /></div>

                    <div className="d-flex  align-items-center w-100 justify-content-around " style={{ maxWidth: "600px" }}><h4 className="fw-bolder">Address&nbsp;&nbsp;&nbsp;&nbsp;</h4><textarea className="my-2 ms-1 w-50 p-2 rounded-3" {...register("address")} placeholder="where to?" required/></div>


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

export default Purchase;