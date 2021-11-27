import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Pinner from '../Shared/Pinner/Pinner';


const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    //users orders
    useEffect(() => {
        fetch(`https://mighty-thicket-32319.herokuapp.com/orders/${user.email}`)

            .then(res => res.json())
            .then(data => setOrders(data))
            .finally(() => {
                setIsLoading(false)
            })
    }, [user])


    // cancel order
    const deleteHandle = (id) => {
        const proceed = window.confirm('Are you want to cancel?')
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
            <h1 className="bg-primary bg-opacity-25 mb-0 fw-bold p-1">My orders</h1>
            <div>
                {
                    isLoading && <Pinner></Pinner>
                }
                {
                    orders.map(order => <div key={order._id} className="d-flex align-items-center justify-content-center">
                        <div className="card my-3 shadow " style={{ maxWidth: "400px" }}>
                            <img src={order?.ProductImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title fw-bolder">{order.company}</h3>
                                <h4 className="card-text">{order.PurchasedProduct}</h4>
                                <h4 className={`card-text p-1 mx-5 rounded-3 bg-opacity-50 mb-5 ${(order.status === 'pending') ? 'bg-warning' : 'bg-success'}`}>{order.status}</h4>
                                <button onClick={() => deleteHandle(order._id)} className="btn bg-danger text-white fw-bold  ">Cancel order</button>
                            </div>
                        </div>
                    </div>)

                }

            </div>
            <div>
                <img className="mb-0 img-fluid" src="https://i.ibb.co/s9dg9B1/math-lf-Rlv3nuf78-unsplash.jpg" alt="" />

            </div>
        </div>
    );
};

export default MyOrders;



