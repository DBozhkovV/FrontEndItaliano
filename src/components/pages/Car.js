import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


function Car () {
    let params = useParams();

    const [data, setData] = useState();

    let componentMounted = true;

    useEffect(() => {
        const getCars = async () => {
            const response = await fetch(`http://127.0.0.1:8000/dealership/cars/${params.carId}/?format=json`, {mode: 'cors'});
            if(componentMounted){
                setData(await response.clone().json());
            }
            return () => {
                componentMounted = false;
            }
        }
        getCars();
    }, []);

    if(!data) return null;

    return(
  

<div >
 
 
    <main style={{ marginTop: `${30}px`}}s>
        <section className="featured-places">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <div>
                      <img src={data.images[0].image} alt="" className="img-responsive wc-image"></img>
                    </div>
                     
                  </div>

                  <div className="col-md-6 col-xs-12">
                    <form action="#" method="post" className="form">
                      <h2><strong className="text-primary">{data.price} $</strong></h2>

                      

                      <ul className="list-group list-group-flush">
                    

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Make</span>
                                 <strong className="pull-right">{data.make}</strong>
                            </div>
                       </li>

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left"> Model</span>

                                 <strong className="pull-right">{data.model}</strong>
                            </div>
                       </li>

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Production Year</span>

                                 <strong className="pull-right">{data.year}</strong>
                            </div>
                       </li>

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Mileage</span>

                                 <strong className="pull-right">{data.mileage} km</strong>
                            </div>
                       </li>

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Fuel Consumption</span>

                                 <strong className="pull-right">{data.fuel} l/100km</strong>
                            </div>
                       </li>


                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Power</span>

                                 <strong className="pull-right">{data.power} hp</strong>
                            </div>
                       </li>


                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Date Added</span>

                                 <strong className="pull-right">{data.date_added}</strong>
                            </div>
                       </li>
                       

                       <li className="list-group-item">
                            <div className="clearfix">
                                 <span className="pull-left">Description</span>

                                 <strong className="pull-right">{data.description}</strong>
                            </div>
                       </li>

                    </ul>

                      
                    </form>
                  </div>
                </div>
            </div>
        </section>
    </main>

   

</div>
    )
}

export default Car;