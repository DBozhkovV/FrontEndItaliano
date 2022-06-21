import React from "react";
import Loading from "./Loading";
import { Link } from 'react-router-dom'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <Loading />;
    }

    return(
        <>
            {posts.map(car => (
                <div className="col-md-3 mb-4" key={car.id}>    
                    <div className="card h-100 text-center p-4" key={car.id}>
                        <img src={car.images[0].image} className="card-img-top" alt={car.make} />
                        <div className="card-body">
                            <h5 className="card-title mb-0">{car.make} {car.model}</h5>
                            <p className="card-text">${car.price}</p>
                            <Link to={`/car/${car.id}`} key={car.id} className="btn btn-outline-dark me-2">More Information</Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Posts;