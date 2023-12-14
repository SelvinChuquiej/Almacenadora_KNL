import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export const AddLease = () => {
    const [cellars, setCellars] = useState([{}])
    const [clients, setClients] = useState([{}])
    const [services, setServices] = useState([{}])
    const [array, setArray] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);


    const handleClick = () => {
        setButtonText('Â¡agregado!');
        setButtonColor('green');
    }

    const getCellars = async () => {
        try {
            const { data } = await axios('http://localhost:3200/cellar/getCellars');
            setCellars(data.cellar)
        } catch (e) {
            console.log(e);
        }
    }


    const getClient = async () => {
        try {
            const { data } = await axios('http://localhost:3200/client/get')
            setClients(data.client)
        } catch (e) {
            console.log(e);
        }
    }

    const getServices = async () => {
        try {
            const { data } = await axios('http://localhost:3200/service/getAdditional')
            setServices(data.additional)
        } catch (e) {
            console.log(e);
        }
    }

    const addLease = async () => {
        try {
            let lease = {
                cellar: document.getElementById('inputCellar').value,
                client: document.getElementById('inputClient').value,
                services: array
            }
            const { data } = await axios.post('http://localhost:3200/lease/add', lease);
            Swal.fire({
                icon: 'success',
                title: data.message
            })
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: e.response.data.message
            })
        }
    }

    const arrayServices = (id, index) => {
        setArray([
            ...array,
            id
        ]);
        setDisabledButtons([...disabledButtons, index]);
        console.log(array);
    }

    const deleteArrayService = (id, index) => {
        let posicion = array.indexOf(id);
        if (posicion !== -1) {
            const newArray = [...array];
            newArray.splice(posicion, 1);
            setArray(newArray);
        }
        setDisabledButtons(disabledButtons.filter((i) => i !== index));
        console.log(array);
    }

    useEffect(() => getCellars, [])
    useEffect(() => getClient, [])
    useEffect(() => getServices, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#1abc9c" }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample" >
                        <h1 className='text-white' style={{ fontSize: "2.5rem" }}>Add Lease</h1>
                    </div>
                </div>
            </nav>
            <br />
            <section className='vh-100'>
                <div className="container h-100">
                    <div className='row d-flex justify-content-center h-100'>
                        <div className='col-xl-9'>
                            <div className='card'>
                                <div className='card-body'>
                                    <form action="#">
                                        <div className="row">
                                            <div className=" col form-group">
                                                <label htmlFor="inputCellar" className='form-label'>Cellar:</label>
                                                <select className="form-control" id="inputCellar" required>
                                                    {
                                                        cellars.map(({ _id, name }, i) => {
                                                            return (
                                                                <option key={i} value={_id}>{name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="col form-group">
                                                <label htmlFor="inputClient" className='form-label'>Client:</label>
                                                <select className="form-control" id="inputClient" required>
                                                    {
                                                        clients.map(({ _id, name }, i) => {
                                                            return (
                                                                <option key={i} value={_id}>{name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <br />
                                    </form>
                                    <div className="table-responsive table-lg mt-3">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    services.map(({ _id, name, price, color }, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{name}</td>
                                                                <td>{price}</td>
                                                                <td className="text-center align-middle">
                                                                    <div className="btn-group align-top">
                                                                        <button onClick={() => arrayServices(_id, index)} disabled={disabledButtons.includes(index)} className={`btn btn-primary`}>Agregar</button>
                                                                        <button onClick={() => deleteArrayService(_id, index)} className='btn btn-danger'>Cancelar</button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <center>
                                        <Link to={'/crud/lease'}>
                                            <button onClick={() => addLease()} type="submit" className="btn btn-success btn-lg">Lease</button>
                                        </Link>
                                        <Link to={'/crud/lease'}>
                                            <button type="submit" className="btn btn-danger btn-lg">Cancel</button>
                                        </Link>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddLease;