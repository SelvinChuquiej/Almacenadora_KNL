import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

export const UpdateAccount = () => {

    const [tableAccounts, setTableAccounts] = useState({})
    const { id } = useParams();

    const getTableAccounts = async () => {
        try {
            const { data } = await axios(`http://localhost:3200/account/getById/${id}`)
            setTableAccounts(data.account)
            console.log(data.account);
        } catch (e) {
            console.log(e);
        }
    }

    const updateAccounts = async () => {
        try {
            let updatedAccount = {
                name: document.getElementById('inputName').value,
                surname: document.getElementById('inputSurname').value,
                username: document.getElementById('inputUsername').value,
                email: document.getElementById('inputEmail').value,
                phone: document.getElementById('inputPhone').value
            }
            const { data } = await axios.put(`http://localhost:3200/account/updateAccount/${id}`, updatedAccount)
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

    useEffect(() => getTableAccounts, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#1abc9c" }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample" >
                        <h1 className='text-white' style={{ fontSize: "2.5rem" }}>Update Account</h1>
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
                                            <input defaultValue={tableAccounts.name} name='name' type="text" className="form-control form-control-lg" id='inputName' />
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Surname</h6>
                                            <input defaultValue={tableAccounts.surname} name='surname' type="text" className="form-control form-control-lg" id='inputSurname' />
                                        </div>
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Username</h6>
                                            <input defaultValue={tableAccounts.username} name='username' type="text" className="form-control form-control-lg" id='inputUsername' />
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Email</h6>
                                            <input defaultValue={tableAccounts.email} name='email' type="email" className="form-control form-control-lg" id='inputEmail' />
                                        </div>
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Phone</h6>
                                            <input defaultValue={tableAccounts.phone} name='phone' type="text" className="form-control form-control-lg" id='inputPhone' />
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="px-5 py-4">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={'/crud/accounts'}>
                                                    <button onClick={() => updateAccounts()} type="submit" className="btn btn-primary btn-lg">Update</button>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link to={'/crud/accounts'}>
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
