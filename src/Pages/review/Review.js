import React from 'react';

const Review = (props) => {
    const { name, rating, comment, userImage } = props.review;
    return (
        <div className="d-flex align-content-center justify-content-center">
            <div className="card border-primary mb-3 bg-secondary text-white fw-bold " style={{ maxWidth: "20rem" }}>
                <div className="d-flex justify-content-around pt-2 align-items-center mb-0 pb-0">
                    {
                        userImage ? <img className="mx-3" style={{ width: "50px", height: '50px', borderRadius: "50px 50px" }} src={userImage} alt="" />
                            : <img className="mx-3" style={{ width: "50px", height: '50px', borderRadius: "50px 50px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerBR3bfynBVdF2gjoii3i_8yI4KOdK5_cxw&usqp=CAU" alt="" />
                    }
                    <div className="card-header">{name}</div>
                </div>
                <hr />
                <div className="card-body text-white">
                    <h5 className="card-title">{comment}</h5>
                    <hr />
                    <p className="card-text fw-light text-warning">
                        {
                            [...Array(parseInt(rating)).keys()].map(star => <i className="fas fa-star px-2"></i>)

                        }
                        {
                            [...Array(5 - parseInt(rating)).keys()].map(star => <i className="fas fa-star fw-lighter px-2"></i>)

                        }
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Review;