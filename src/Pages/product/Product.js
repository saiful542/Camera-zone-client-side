import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



const Product = (props) => {
    const { picture, price, name, description, _id, company, stock } = props.product

    return (
        <div>
            <Col className="animate__animated animate__fadeIn">
                <Card className="shadow-lg " >
                    <h2 className="fw-bolder p-3 bg-dark text-white mb-0">{company}</h2>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body className="text-start">
                        <Card.Title className="fw-bolder">{name}</Card.Title>
                        <hr />
                        <small>{description.slice(0, 170)}</small>
                        <br />
                        <br />
                        <p className=" fw-bolder text-primary">{price}</p>
                        <span className=" text-center">
                            {
                                (stock === "out") ? <p className="fw-bold text-danger p-1 bg-warning bg-opacity-25 rounded-3 w-25">stock out</p>
                                    : <p className="fw-bold text-success p-1  bg-success bg-opacity-25 rounded-3 w-25  ">In stock</p>
                            }
                        </span>
                        <NavLink  to={`/Purchase/${_id}`}><button  className=" w-50 btn btn-dark text-white fw-bolder" >purchase</button></NavLink>
                    </Card.Body>
                </Card>
            </Col>
            
        </div>
    );
};

export default Product;