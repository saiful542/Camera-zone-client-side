import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './SideBar.css'

const SideBar = () => {

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
    return (
        <div>
            {
                !isLoading ?
                    <div>
                        {
                            isAdmin ?
                                <div className="sidebar fw-bold">
                                    <Link className="active" to="./Home">Home</Link>
                                    <Link className="" to="./ManageProducts">Manage products</Link>
                                    <Link className="" to="./ManageOrders">Manage orders</Link>
                                    <Link className="" to="./AddProducts">Add products</Link>
                                    <Link className="" to="./MakeAdmin">Make Admin</Link>


                                </div>
                                : <div>
                                    <div className="sidebar fw-bold">
                                        <Link className="active" to="./Home">Home</Link>
                                        <Link className="" to="./MyOrders">My Orders</Link>
                                        <Link className="" to="./Pay">Pay</Link>
                                        <Link className="" to="./GiveReview">Review</Link>

                                    </div>

                                </div>

                        }
                    </div>
                    : <span></span>
            }


        </div>
    );
};

export default SideBar;