import React, {useState, useEffect} from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Cars = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
 
    useEffect(() => {
        const getCars = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
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
/*
    const filterProduct = (type) => {
        const updatedList = data.filter((x)=>x.category === type);
        setFilter(updatedList);
    }
*/
    const ShowProducts = () => {
        return(
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    {/* <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button> */}
                    <button className="btn btn-outline-dark me-2">All</button>
                    {/* <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electric</button> */}
                    <button className="btn btn-outline-dark me-2">Electric</button>
                </div>
                {filter.map((product)=>{
                    return(
                        <>
                            <div className="col-md-3 mb-4">    
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p className="card-text">${product.price}</p>
                                        <a href="#" className="btn btn-primary">Buy now</a>
                                    </div>
                                </div>
                            </div>
                        </>
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
                        {loading ? <Loading/> : <ShowProducts/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cars;