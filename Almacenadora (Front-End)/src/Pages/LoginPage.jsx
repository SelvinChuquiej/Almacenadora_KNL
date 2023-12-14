import React, { useState, useContext } from 'react'
import axios from 'axios'
import Background from '../Assents/fondo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Index'
import Swal from 'sweetalert2'


export const LoginPage = () => {

    const navigate = useNavigate()
    const { setLoggedIn, loggedIn, setDataUser } = useContext(AuthContext)

    const [form, setform] = useState({
        username: '',
        password: ''
    })

    const loginHandlChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const login = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axios.post('http://localhost:3200/account/login', form)
            if (data.token) {
                setLoggedIn(true)
                localStorage.setItem("token", data.token)
                setDataUser({
                    id: data.userLogged._id,
                    phone: data.userLogged.phone,
                    surname: data.userLogged.surname,
                    name: data.userLogged.name,
                    username: data.userLogged.username,
                    role: data.userLogged.role
                })
            }
            Swal.fire({
                icon: 'success',
                title: data.message
            })
            navigate('/crud/lease')
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: e.response.data.message
            })
        }
    }

    return (
        <>
            <section className="">
                <div className="px-4 py-5 px-md-5 text-center text-lg-start"
                    style={{
                        backgroundImage: `url(${Background})`,
                        backgroundSize: "cover",
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100vw',
                        height: '100vh'
                    }}>
                    <div className="container" style={{ width: '100%', height: 'auto' }}>
                        <div className="row gx-lg-5 align-items-center" style={{ width: '60%', justifyContent: 'space-between', margin: '0', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,  -50%)' }}>
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-4 display-3 fw-bold ls-tight">
                                    Almacenadora <br />
                                    <span className="text-primary">KINAL</span>
                                </h1>
                                <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                                    Ingresa tu nombre de usuario y contraseña para acceder a las funcionalidades
                                </p>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0"
                                style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    width: '25rem',
                                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                }}>
                                <div >
                                    <div className="card-body py-5 px-md-5">
                                        <form>
                                            <div className="row">
                                                <p className=" display-6" style={{ color: 'hsl(217, 10%, 50.8%)', fontWeight: 'bold', font: 'italic', textAlign: 'center' }}>Login</p>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input onChange={loginHandlChange} type="text" id="form3Example3" className="form-control" name="username" />
                                                <label className="form-label" htmlFor="form3Example3">Username</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input onChange={loginHandlChange} type="password" id="form3Example4" className="form-control" name="password" />
                                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                    <button onClick={(e) => login(e)} className="btn btn-primary btn-block mb-6">
                                                        Sign up
                                                    </button>
                                                </div>
                                                <div>
                                                    <Link to={'/'}>
                                                        <button className="btn btn-primary btn-block mb-6">
                                                            Cancel
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
