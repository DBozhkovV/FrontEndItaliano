import React, {useState, useEffect} from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'
import './cars.css'

const Cars = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getCars = async () => {
            setLoading(true);
            const response = await fetch('http://127.0.0.1:8000/dealership/cars/?format=json', {mode: 'cors'});
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                // console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getCars();
    }, []);

    const Loading = () => {
        return(
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }

    const filterProduct = (type) => {
        const updatedList = data.filter((x)=>x.make === type);
        setFilter(updatedList);
    }

    const ShowCars = () => {
        return(
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
                    <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button> 
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Audi")}>Audi</button>    
                </div>
                {filter.map((car)=>{
                    return(
                            <div className="col-md-3 mb-4" key={car.id}>    
                                <div className="card h-100 text-center p-4" key={car.id}>
                                    <img src={car.images[0].image} className="card-img-top" alt={car.make} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{car.model}</h5>
                                        <p className="card-text">${car.price}</p>
                                        <Link to={`/car/${car.id}`} key={car.id} className="btn btn-outline-dark me-2">More Information</Link>
                                    </div>
                                </div>
                            </div>
                    )
                })}
            </>
        )
    } 

    return(
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">All Cars</h1>
                        <hr/>
                    </div>
                    <div className="row justify-content-center">
                        {loading ? <Loading/> : <ShowCars/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cars;