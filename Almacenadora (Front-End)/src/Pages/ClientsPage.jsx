import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/NavBar/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { TableClients } from '../components/table/TableClients'
import { Outlet } from 'react-router-dom'
import '../Assents/css/crudPages.css'
import { NavBarAdmin } from '../components/NavBarAdmin/NavBarAdmin';

import Swal from 'sweetalert2'

export const ClientsPage = () => {
    const [clients, setClients] = useState([{}])
    const [tableClients, setTableClients] = useState([{}])
    const [search, setSearch] = useState("")

    const getTableClients = async () => {
        try {
            const { data } = await axios.get('http://localhost:3200/client/get')
            setClients(data.client)
            setTableClients(data.client)
        } catch (e) {
            console.log(e);
        }
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (searchTerm) => {
        var resultSearch = tableClients.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return elemento
            }
        })
        setClients(resultSearch)
    }


    const deletClient = async (id) => {
        try {
            let confirmDelete = confirm("Are you sure you want to delete this hold?")
            if (confirmDelete) {
                const { data } = await axios.delete(`http://localhost:3200/client/delete/${id}`)
                alert(data.message)
                getTableClients()
            }
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    useEffect(() => getTableClients, [])
    return (
        <>
            <Outlet></Outlet>
            <NavBarAdmin></NavBarAdmin>
            <br />
            <div className="container">
                <div className="row flex-lg-nowrap">
                    <div className="col">
                        <div className="row flex-lg-nowrap">
                            <div className="col mb-3">
                                <div className="e-panel card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <p className="text-center fs-1">CLIENTS</p>
                                        </div>
                                        <div className="row align-items-center pt-4 pb-3">
                                            <div className="col-md-4 form-floating mb-3">
                                                <input type="text" className="search-input" value={search} onChange={handleChangeSearch} placeholder="Search..." />
                                                <a href="#" className="search-btn">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="col-md-2 offset-md-6">
                                                <Link to={'add'} className="add">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                                    </svg>
                                                </Link>
                                                <Link to={'/crud'} className="exit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                                        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div>
                                                <div className="e-table">
                                                    <div className="table-responsive table-lg mt-3">
                                                        <table className="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Surname</th>
                                                                    <th>identification</th>
                                                                    <th>Residency</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    clients.map(({ _id, name, surname, identification, residency }, index) => {
                                                                        return (
                                                                            <tr key={index}>
                                                                                <TableClients
                                                                                    name={name}
                                                                                    surname={surname}
                                                                                    identification={identification}
                                                                                    residency={residency}
                                                                                ></TableClients>
                                                                                <td className="text-center align-middle">
                                                                                    <div className="btn-group align-top">
                                                                                        <Link to={`update/${_id}`} className="btn btn-sm btn-primary btn-outline-secondary badge">
                                                                                            <button className="btn badge" type="button" data-toggle="modal" data-target="#user-form-modal">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                                                                </svg>
                                                                                            </button>
                                                                                        </Link>
                                                                                        <button onClick={() => deletClient(_id)} className="btn btn-sm btn-danger btn-outline-secondary badge" type="button">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                                                            </svg>
                                                                                        </button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
