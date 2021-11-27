import React, { useEffect, useState } from 'react';
import Pinner from '../../Shared/Pinner/Pinner';


const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const [order, setOrder] = useState([])
    const [count, setCount] = useState([])
    const [isLoading, setIsLoading] = useState([true])

    useEffect(() => {
        fetch(`https://mighty-thicket-32319.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setOrders(data.orders)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [orders])

    const handleApprove = (id) => {
        const url = `https://mighty-thicket-32319.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => setOrder(data))
            .finally(() => {
                setIsLoading(false)
            })

    }


    const handleUser = (id) => {
        const proceed = window.confirm('do you want to cancel?')
        if (proceed) {
            const url = `https://mighty-thicket-32319.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('order canceled successfully')
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setOrders(remainingOrders)

                    }
                })
                .finally(() => {
                    setIsLoading(false)

                })
        }

    }
    return (
        <div>
            <h1 className="p-1 w-100 bg-primary bg-opacity-25 mb-0 fw-bold shadow">Manage orders ( {count} )</h1>
            <div className="container" >
                {
                    isLoading && <Pinner></Pinner>
                }

                {
                    <div className="pt-4" >

                        {
                            orders.map(order => <div key={order._id} className="w-100 d-flex flex-column justify-content-center align-items-center">
                                <div className="w-100" style={{ maxWidth: "40rem" }} >
                                    <div className="card shadow mb-3 w-100" style={{ borderRadius: "2rem", overflow: "hidden" }}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                {
                                                    order.image ? <img style={{ width: "150px", height: '150px', borderRadius: "150px 150px" }} src={order?.image} className="mt-5" alt="Use_image" />
                                                        :
                                                        <img style={{ width: "150px", height: '150px', borderRadius: "150px 150px" }} src="https://www.prajwaldesai.com/wp-content/uploads/2021/02/Find-Users-Last-Logon-Time-using-4-Easy-Methods.jpg" className="mt-5" alt="Use_image" />
                                                }

                                                <h3 className="pt-4 fw-bold">{order.name}</h3>
                                                <span className="px-2"><hr /></span>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body fw-bold">
                                                    <h5 className="card-title fw-bolder">{order?.company}</h5>
                                                    <p className="card-text"><small className="text-muted">{order?.PurchasedProduct}</small></p>
                                                    <hr />
                                                    {
                                                        order.address ? <p className="card-text">address :{order?.address}</p>
                                                            : <p></p>
                                                    }

                                                    <p className="card-text"><small className="text-muted">product id : {order?.bookedId}</small></p>

                                                    <p className="card-text"><small className="text-muted">mail : {order?.email}</small></p>
                                                    <p className="card-text"><small className="text-muted">phone : {order?.phone}</small></p>
                                                    <p className="card-text"><small className="text-muted">status : {order?.status}</small></p>
                                                    <button onClick={() => handleApprove(order._id)} className={`btn fw-bolder ${(order.status === "pending") ? `btn-warning` : `btn-success`}`}>{order.status}</button>

                                                    <button onClick={() => handleUser(order._id)} className="btn btn-danger ms-4">delete</button>
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

export default ManageOrders;