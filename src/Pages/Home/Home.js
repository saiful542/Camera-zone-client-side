import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import './Home.css'
import Product from '../product/Product';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import Review from '../review/Review';
import ScoreCard from '../ScoreCard/ScoreCard';
import Pinner from '../Shared/Pinner/Pinner';



const Home = () => {
    const { products } = useProducts();
    const { reviews } = useReviews();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mb-0 animate__animated animate__fadeIn overflow-hidden">
            <div className="bg-warning w-100">
                <div className="  text-dark w-100  d-lg-flex bg-warning" >
                    <div className=" text-dark fw-bolder fs-2   text-start p-4 my-md-5 bg-secondary bg-opacity-25 mb-3 rounded-3 ">
                        <h5 className="card-title ">"A <span style={{ borderRadius: ".5rem" }} className=" p-1 bg-white bg-opacity-25 fw-bold ">Camera</span>is a tool for creating Artwork"</h5>
                        <hr />
                        <p className="text-wrap">Photography is the art, application, and practice <br /> of creating durable images by recording light, <br /> either electronically by means of an image sensor, or  chemically by means of a <br />  light-sensitive material such <br /> as photographic film.</p><hr />
                        <span style={{ borderRadius: ".5rem" }} className=" p-1 bg-white bg-opacity-25 fst-italic">A camera is an optical instrument that</span>
                        <br />
                        <span style={{ borderRadius: ".5rem" }} className="fst-italic p-1 bg-white bg-opacity-25 ">captures a visual image.</span>

                        <br />
                        <Link to="/Products"><button className="btn bg-light fs-5 fw-bolder px-5 mt-3 mb-5">Explore</button></Link>
                    </div>
                    <div className="back h-100"><img className="img-fluid back" src="https://i.ibb.co/c1vSbJN/banner-2.jpg" alt="" /></div>

                </div>
            </div>
            <h1 className="fw-bolder mt-5 p-2 text-warning mb-3">Our <span className="p-2 bg-dark bg-opacity- rounded-3">Products</span></h1>

            <div style={{ maxWidth: "90rem " }} className="d-flex justify-content-center">
                <hr />
                {
                    products ? <Row xs={1} md={2} lg={4} className="p-1 g-4 d-flex align-items-center justify-content-center w-100">
                        {
                            products.slice(0, 7).map(product => <Product
                                key={product._id}
                                product={product}>

                            </Product>)
                        }
                    </Row> : <Pinner></Pinner>

                }


            </div>
            <hr />
            <h1 className="fw-bolder mt-5 p-2 text-warning mb-3"><span className="p-2 px-5 bg-dark bg-opacity- rounded-3 ">Customer review</span></h1>
            <span className="bg-dark container" style={{ maxWidth: "90rem", height: ".01rem" }}></span>
            <div style={{ maxWidth: "90rem " }} className="d-flex justify-content-center mt-2">
                {
                    reviews ? <Row xs={1} md={2} lg={3} className="p-1 g-4 d-flex align-items-center justify-content-center w-100">
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}>

                            </Review>)
                        }
                    </Row> : <Pinner></Pinner>

                }
            </div>
            <span className="bg-dark container" style={{ maxWidth: "90rem", height: ".01rem" }}></span>

            <div>
                <ScoreCard></ScoreCard>
            </div>




            <div className="row text-white mt-5 g-2 mb-5" style={{ backgroundColor: "#292c2f", borderRadius: "2rem" }}>

                <div className="col-md-6 text-start my-5 px-4  container fw-bold bg-dark h-100">
                    <h3 className="heading mt-5"><span className="text-warning fw-bolder">wild</span>life
                        photography with
                        <br />
                        <br />
                        <span className="bg-warning p-1 me-2 text-dark fw-bold rounded-3 my-2">Nikon D500 </span>
                        is unbelievable.</h3><br /><hr />
                    <p className="fs-5">A popular choice amongst wildlife photographers, the Nikon D500 exploded on to the scene boasting huge capabilities for a crop sensor camera. </p>
                </div>
                <div className="col-md-6">
                    <img style={{ borderRadius: "2rem" }} className="card-body h-100 img-fluid " src="https://i.ibb.co/m8xv4PD/wild.jpg" alt="" />

                </div>
            </div>

            <div className="container d-lg-flex justify-content-around align-items-center my-5 bg-warning py-3 bg-opacity-50 rounded-3">
                <div ><h1 style={{ fontSize: "8rem" }}><i className="fas fa-shopping-cart text-white"></i></h1></div>
                <div><h1 className="fw-bolder text-dark">20% Discount for today!!<i className="fas fa-tags m-2 text-warning"></i>
                    <br />Grab yours now!!</h1></div>
            </div>

            <div className="mt-5 mb-0 ">
                <h1 style={{ fontSize: "5rem" }}><i className="fab fa-battle-net"></i></h1>
                <br />
                <h1>Happy shopping...</h1>
            </div>
            <div className="">
            <img className="mb-0 img-fluid" src="https://i.ibb.co/s9dg9B1/math-lf-Rlv3nuf78-unsplash.jpg" alt="" />
            </div>

        </div>
    );
};

export default Home;