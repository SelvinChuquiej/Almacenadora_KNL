import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

export const UpdateClient = () => {
    const [tableClients, setTableClients] = useState({})
    const { id } = useParams();

    const getTableClients = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3200/client/getById/${id}`);
            console.log(data.client);
            setTableClients(data.client)
        } catch (e) {
            console.log(e);
        }
    }

    const updateClient = async () => {
        try {
            let updatedClient = {
                name: document.getElementById('inputName').value,
                surname: document.getElementById('inputSurname').value,
                identification: document.getElementById('inputIndentification').value,
                residency: document.getElementById('inputResidency').value
            }
            const { data } = await axios.put(`http://localhost:3200/client/update/${id}`, updatedClient)
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

    useEffect(() => getTableClients, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#1abc9c" }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample" >
                        <h1 className='text-white' style={{ fontSize: "2.5rem" }}>Update Client</h1>
                    </div>
                </div>
            </nav>
            <section className="vh-100" /* style="background-color: #2779e2;" */>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">
                            <div className="card" /* style="border-radius: 15px;" */>
                                <div className="card-body">
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md- pe-5">
                                            <h6 className="mb-0">Name</h6>
                                            <input defaultValue={tableClients.name} name='name' type="text" className="form-control form-control-lg" id='inputName' />
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Surname</h6>
                                            <input defaultValue={tableClients.surname} name='surname' type="text" className="form-control form-control-lg" id='inputSurname' />
                                        </div>
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Identification</h6>
                                            <input defaultValue={tableClients.identification} name='identification' type="text" className="form-control form-control-lg" id='inputIndentification' />
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Residency</h6>
                                            <input defaultValue={tableClients.residency} name='residency' type="text" className="form-control form-control-lg" id='inputResidency' />
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="px-5 py-4">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={'/crud/clients'}>
                                                    <button onClick={() => updateClient()} type="submit" className="btn btn-primary btn-lg">Update Client</button>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link to={'/crud/clients'}>
                                                    <button type="submit" className="btn btn-danger btn-lg">Cancel</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
