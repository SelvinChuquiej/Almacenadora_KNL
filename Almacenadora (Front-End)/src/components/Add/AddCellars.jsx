import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


export const AddCellars = () => {
    const [form, setForm] = useState({
        name: '',
        description: '',
        location: '',
        size: '',
        availability: '',
        price: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            availability: document.getElementById("availability").value
        })
    }

    const add = async (e) => {
        try {
            const { data } = await axios.post('http://localhost:3200/cellar/add', form)
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
                        <h1 className='text-white' style={{ fontSize: "2.5rem" }}>Add Cellars</h1>
                    </div>
                </div>
            </nav>
            <br />
            <section className="vh-100" style={{ background: "#f8f8f8" }} /* style="background-color: #2779e2;" */>
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
                                            <h6 className="mb-0">Size</h6><br />
                                            <input onChange={handleChange} name='size' type="text" className="form-control form-control-lg" />
                                        </div>
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Price</h6><br />
                                            <input onChange={handleChange} name='price' type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Location</h6><br />
                                            <input onChange={handleChange} name='location' type="text" className="form-control form-control-lg" />
                                        </div>
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Availability</h6><br />
                                            <select className='form-control' name="availability" id="availability" onChange={handleChange}>
                                                <option value="No disponible" >No disponible</option>
                                                <option value="Disponible" >Disponible</option>
                                            </select>
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Descripton</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <textarea onChange={handleChange} name='description' className="form-control" rows="3" placeholder="Message sent to the employer"></textarea>
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="px-5 py-4">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={'/crud/cellars'}>
                                                    <button onClick={(e) => add(e)} type="submit" className="btn btn-primary btn-lg">Add</button>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link to={'/crud/cellars'}>
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
