import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

export const UpdateService = () => {

    const [service, setService] = useState({});
    const { id } = useParams();

    const getService = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3200/service/getById/${id}`);
            setService(data.service);
            console.log(data.service);
        } catch (err) {
            console.log(err);
        }
    }

    const updateService = async () => {
        try {
            let updateService = {
                name: document.getElementById('inputName').value,
                price: document.getElementById('inputPrice').value,
                description: document.getElementById('inputDescription').value,
            }
            const { data } = await axios.put(`http://localhost:3200/service/updateAdditional/${id}`, updateService);
            Swal.fire({
                icon: 'success',
                title: data.message
            })
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: e.response.data.message
            })
        }
    }

    useEffect(() => getService, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#1abc9c" }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample" >
                        <h1 className='text-white' style={{ fontSize: "2.5rem" }}>Update Services</h1>
                    </div>
                </div>
            </nav>
            <section className="vh-100" /* style="background-color: #2779e2;" */>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">
                            <h1 className="text-white mb-4">Update Service</h1>
                            <div className="card" /* style="border-radius: 15px;" */>
                                <div className="card-body">
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md- pe-5">
                                            <h6 className="mb-0">Name</h6>
                                            <input defaultValue={service.name} name='name' type="text" className="form-control form-control-lg" id='inputName' />
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Price</h6>
                                            <input defaultValue={service.price} name='price' type="text" className="form-control form-control-lg" id='inputPrice' />
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Descripton</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <textarea defaultValue={service.description} name='description' className="form-control" rows="3" placeholder="Message sent to the employer" id='inputDescription'></textarea>
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="px-5 py-4">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={'/crud/services'}>
                                                    <button onClick={() => updateService()} type="submit" className="btn btn-primary btn-lg">Update</button>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link to={'/crud/services'}>
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
