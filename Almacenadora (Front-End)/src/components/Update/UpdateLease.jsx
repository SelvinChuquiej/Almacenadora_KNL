import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export const UpdateLease = () => {

    const [tableLease, setTableLease] = useState([{}])
    const { id } = useParams()

    const [cellars, setCellars] = useState([{}])
    const [clients, setClients] = useState([{}])
    const [services, setServices] = useState([{}])

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

    const getTableLease = async () => {
        try {
            const { data } = await axios(`http://localhost:3200/lease/getById/${id}`)
            setTableLease(data.lease)
        } catch (e) {
            console.log(e);
        }
    }

    const updateLease = async () => {
        try {
            let updatedLease = {
                cellar: document.getElementById('inputCellar').value,
                client: document.getElementById('inputClient').value,
                services: document.getElementById('inputServices').value
            }
            const { data } = await axios.put(`http://localhost:3200/lease/update/${id}`, updatedLease)
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        getCellars(),
            getClient(),
            getServices(),
            getTableLease()
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#1abc9c" }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample" >
                        <h1 className='text-white' style={{ fontSize: "2.5rem" }}>Update Lease</h1>
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
                                                                <option key={i} value={_id} defaultValue={tableLease.cellar}>{name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="col form-group">
                                                <label htmlFor="inputClient" className='form-label'>Client:</label>
                                                <select className="form-control" id="inputClient" required disabled>
                                                    {
                                                        clients.map(({ _id, name }, i) => {
                                                            return (
                                                                <option key={i} value={_id} defaultValue={tableLease.client}>{name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col form-group">
                                                <label htmlFor="inputServices">Additional services:</label>
                                                <select className="form-control" id="inputServices" required disabled>
                                                    {
                                                        services.map(({ _id, name }, i) => {
                                                            return (
                                                                <option key={i} value={_id} defaultValue={tableLease.services}>{name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <br />
                                        <center>
                                            <Link to={'/crud/lease'}>
                                                <button onClick={() => updateLease()} type="submit" className="btn btn-success btn-lg">Lease</button>
                                            </Link>
                                            <Link to={'/crud/lease'}>
                                                <button type="submit" className="btn btn-danger btn-lg">Cancel</button>
                                            </Link>
                                        </center>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
