import React, { useEffect, useState } from 'react';
import Pinner from '../../Shared/Pinner/Pinner';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState([]);
    const [isLoading, setIsLoading] = useState([true])
    useEffect(() => {
        fetch(`https://mighty-thicket-32319.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setProducts(data.products)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [])


    // DELETE
    const deleteHandle = (id) => {
        const proceed = window.confirm('Are you want to delete?')
        if (proceed) {
            const url = `https://mighty-thicket-32319.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingProducts = products.filter(product => product._id !== id)
                        setProducts(remainingProducts)

                    }
                })
                .finally(() => {
                    setIsLoading(false)
                })

        }

    }
    return (
        <div>
            <h1 className="p-1 w-100 bg-primary  bg-opacity-25 mb-0 fw-bold shadow">Manage products ( {count} )</h1>
            <div className=" container" >

                {
                    isLoading && <Pinner></Pinner>
                }
                {

                    <div className=" d-flex flex-column justify-content-center align-items-end  ">

                        {
                            products.map(product => <div key={product._id} className="">
                                <div className=" p-2">
                                    <div className="card mb-4 shadow flex-end" style={{ maxWidth: "1000px" }}>
                                        <div className="row g-0">
                                            <div className="col-md-5">
                                                <img src={product?.picture} className="img-fluid h-100" alt="..." />
                                            </div>
                                            <div className="col-md-7">
                                                <div className="card-body fw-bold">
                                                    <h3 className="card-title fw-bolder">{product?.company}</h3>
                                                    <h5 className="card-title fw-bolder">{product?.name}</h5>
                                                    <hr />
                                                    <p className="card-text">{product?.description}</p>
                                                    <p className="card-text"><small className="text-muted">Cost : {product?.price}</small></p>
                                                    <span className=" text-center">
                                                        {
                                                            (product?.stock === "out") ? <p className="fw-bold text-danger p-1 bg-warning bg-opacity-25 rounded-3 ">stock out</p>
                                                                : <p className="fw-bold text-success p-1  bg-success bg-opacity-25 rounded-3 ">In stock</p>
                                                        }
                                                    </span>


                                                    <button onClick={() => deleteHandle(product._id)} className="btn btn-danger fw-bolder">Delete!</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                }
            </div>
            <div>
                <img className="mb-0 img-fluid" src="https://i.ibb.co/s9dg9B1/math-lf-Rlv3nuf78-unsplash.jpg" alt="" />

            </div>
        </div>
    );
};

export default ManageProducts;