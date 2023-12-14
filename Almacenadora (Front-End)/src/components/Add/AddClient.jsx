import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export const AddClient = () => {

    const [form, setForm] = useState({
        name: '',
        surname: '',
        identification: '',
        residency: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const add = async (e) => {
        try {
            const { data } = await axios.post('http://localhost:3200/client/add', form)
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

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#1abc9c" }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample" >
                        <h1 className='text-white' style={{ fontSize: "2.5rem" }}>Add Client</h1>
                    </div>
                </div>
            </nav>
            <br />
            <section className="vh-100" style={{ background: "#f8f8f8", paddingTop: '0px' }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">
                            <div className="card" /* style="border-radius: 15px;" */>
                                <div className="card-body">
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md- pe-5">
                                            <h6 className="mb-0">Name</h6><br />
                                            <input onChange={handleChange} name='name' type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Surname</h6><br />
                                            <input onChange={handleChange} name='surname' type="text" className="form-control form-control-lg" />
                                        </div>
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Identification</h6><br />
                                            <input onChange={handleChange} name='identification' type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Residency</h6><br />
                                            <input onChange={handleChange} name='residency' type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="px-5 py-4">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={'/crud/clients'}>
                                                    <button onClick={(e) => add(e)} type="submit" className="btn btn-primary btn-lg">Add Client</button>
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
