import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import Product from '../product/Product';
import Pinner from '../Shared/Pinner/Pinner';

const Products = () => {
    const { products } = useProducts()
    return (
        <div>
            <h1 className="my-4 fw-bold"><span className="p-1 rounded-3 bg-dark text-warning px-2 fw-bolder">Exclusive</span> products</h1>
            <hr />
            <div className="d-flex justify-content-center">

                {
                    products ? <Row xs={1} md={2} lg={4} className="p-1 g-4 d-flex align-items-center justify-content-center w-100">
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}>

                            </Product>)

                        }
                    </Row> : <Pinner></Pinner>

                }


            </div>
            <div>
                <img className="mb-0 img-fluid" src="https://i.ibb.co/s9dg9B1/math-lf-Rlv3nuf78-unsplash.jpg" alt="" />

            </div>
        </div>
    );
};

export default Products;