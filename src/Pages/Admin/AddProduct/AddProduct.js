import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://mighty-thicket-32319.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()   //reset form
                }
            })
    }
    return (
        <div>
            <h1 className="p-1 w-100 bg-primary bg-opacity-25 mb-0 fw-bold shadow">Add product</h1>
            <div className="container-fluid" >
                <form  className=" d-flex flex-column  py-4 align-items-center my-5 text-dark  " onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex  align-items-center w-100 justify-content-between " style={{ maxWidth: "700px" }}><h4 className="fw-bolder">Company</h4><input className="shadow my-2 ms-1 w-50 p-2 rounded-3"  {...register("company")} placeholder="which company?" required /></div>

                    <div className="d-flex  align-items-center w-100 justify-content-between " style={{ maxWidth: "700px" }}><h4 className="fw-bolder">Product name</h4><input className=" shadow my-2 ms-1 w-50 p-2 rounded-3"  {...register("name")} placeholder="product name" required /></div>

                    <div className="d-flex  align-items-center w-100 justify-content-between " style={{ maxWidth: "700px" }}><h4 className="fw-bolder text-start">product description</h4><input className=" shadow my-2 ms-1 w-50 p-2 rounded-3" {...register("description")} required placeholder="about product" /></div>

                    <div className="d-flex  align-items-center  w-100 justify-content-between " style={{ maxWidth: "700px" }}><h4 className="fw-bolder">Product price</h4><input type="" className=" shadow fw-bolder my-2 ms-1 w-50 p-2 rounded-3" {...register("price")} placeholder="customer price" required/></div>


                    <div className="d-flex  align-items-center w-100 justify-content-between " style={{ maxWidth: "700px" }}><h4 className="fw-bolder">Stock</h4><input className=" shadow my-2 ms-1 w-50 p-2 rounded-3 fw-bolder" {...register("stock")} placeholder="stock in or out?" /></div>

                    <div className="d-flex  align-items-center w-100 justify-content-between " style={{ maxWidth: "700px" }}><h4 className="fw-bolder">Image url</h4><textarea className=" shadow my-2 ms-1 w-50 p-2 rounded-3 fw-bolder" {...register("picture")} placeholder="url" /></div>


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

export default AddProduct;