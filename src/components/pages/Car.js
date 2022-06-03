import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function Car (props) {
    let params = useParams();

    const [data, setData] = useState([]);
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

    return(
        <div>    
            <div key={data.id}>
                <div>
                    <h5>{data.model}</h5>
                    <p>${data.price}</p>             
                </div>
            </div>
        </div>
    )
}

export default Car;