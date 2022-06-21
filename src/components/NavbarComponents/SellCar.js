import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody, ModalTitle} from 'react-bootstrap';

function FormSignUp(props){
    const [email, setEmail] = useState(0);
    const [phone, setPhone] = useState(0);
    const [make, setMake] = useState(0);
    const [model, setModel] = useState(0);
    const [mileage, setMileage] = useState(0);
    const [price, setPrice] = useState(0);
    const [power, setPower] = useState(0);
    const [year, setYear] = useState(0);
    const [fuel, setFuel] = useState(0);
    const [description, setDescription] = useState(0);

    const send = () => {
        const requestOptions = {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ email: email, phone: phone, make: make, model: model, mileage: mileage, price: price, year: year, power: power, fuel: fuel, description: description}),
            mode: 'cors'   
        };     
        fetch('http://localhost:8000/dealership/evaluate/', requestOptions)         
        .then(response => {if(!response.ok) throw new Error(response.status)
        else{
            props.onHide();
        }
        });
    }

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <ModalTitle>
                    Sell your Car
                </ModalTitle>
            </Modal.Header>
            <ModalBody className="form-inputs" >
                <label htmlFor="Email" className='form-label'>
                    Email:   
                </label>
                <input
                    id = 'email'
                    type='email'
                    name ='email'
                    className = "form-input"
                    placeholder = "Enter email"
                    onChange={e => setEmail(e.target.value)}
                />
                <p />
                <label htmlFor="Phone" className='form-label'>
                    Phone:   
                </label>
                <input
                    id = 'phone'
                    type='string'
                    name ='phone'
                    className = "form-input"
                    placeholder = "Enter phone"
                    onChange={e => setPhone(e.target.value)}
                />
                <p />
                <label htmlFor="Make" className='form-label'>
                    Maker:   
                </label>
                <input
                    id = 'make'
                    type='string'
                    name ='make'
                    className = "form-input"
                    placeholder = "Enter maker"
                    onChange={e => setMake(e.target.value)}
                />
                <p />
                <label htmlFor="Model" className='form-label'>
                    Model:   
                </label>
                <input
                    id = 'model'
                    type='string'
                    name ='model'
                    className = "form-input"
                    placeholder = "Enter model"
                    onChange={e => setModel(e.target.value)}
                />
                <p />
                <label htmlFor="Mileage" className='form-label'>
                    Mileage:   
                </label>
                <input
                    id = 'mileage'
                    type='integer'
                    name ='mileage'
                    className = "form-input"
                    placeholder = "Enter mileage"
                    onChange={e => setMileage(e.target.value)}
                />
                <p />
                <label htmlFor="Price" className='form-label'>
                    Price:   
                </label>
                <input
                    id = 'price'
                    type='integer'
                    name ='price'
                    className = "form-input"
                    placeholder = "Enter price"
                    onChange={e => setPrice(e.target.value)}
                />
                <p />
                <label htmlFor="Year" className='form-label'>
                    Year:   
                </label>
                <input
                    id = 'year'
                    type='choice'
                    name ='year'
                    className = "form-input"
                    placeholder = "Enter year"
                    onChange={e => setYear(e.target.value)}
                />
                <p />
                <label htmlFor="Power" className='form-label'>
                    Power:   
                </label>
                <input
                    id = 'power'
                    type='integer'
                    name ='power'
                    className = "form-input"
                    placeholder = "Enter power"
                    onChange={e => setPower(e.target.value)}
                />
                <p />
                <label htmlFor="Fuel" className='form-label'>
                    Fuel:   
                </label>
                <input
                    id = 'fuel'
                    type='float'
                    name ='fuel'
                    className = "form-input"
                    placeholder = "Enter fuel"
                    onChange={e => setFuel(e.target.value)}
                />
                <p />
                <label htmlFor="Description" className='form-label'>
                    Description:   
                </label>
                <input
                    id = 'description'
                    type='string'
                    name ='description'
                    className = "form-input"
                    placeholder = "Enter description"
                    onChange={e => setDescription(e.target.value)}
                />
                <p />
            </ModalBody>
            <Modal.Footer>
            <Button className="form-input-btn" type='submit' onClick={send}>
                Confirm
            </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FormSignUp;