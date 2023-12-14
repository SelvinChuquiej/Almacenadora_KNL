import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer/Footer'
import { Admin } from '../components/Profile/Admin'
import axios from 'axios'
import { NavBarAdmin } from '../components/NavBarAdmin/NavBarAdmin'
import { AuthContext } from '../Index'
import { useContext } from 'react'

export const ProfilePage = () => {
    const [admin, setAdmin] = useState([{}])

    const { dataUser } = useContext(AuthContext)

    const getAdmin = async () => {
        try {
            const { data } = await axios(`http://localhost:3200/getById/${dataUser.id}`)
            setAdmin(data.account)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => getAdmin, []);

    return (
        <>
            <NavBarAdmin />
            <br />
            <br />
            <div className="e-profile container" style={{ width: '85%' }}>
                <div className="row">
                    <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">Profile</h4>
                            <p className="mb-0">Personal information</p>
                        </div>
                    </div>
                </div>
                <div className="tab-content pt-3">
                    <div className="tab-pane active">
                        <form className="form" noValidate="">
                            <div className="row">
                                <div className="col">
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input defaultValue={dataUser.name} className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Surname</label>
                                                <input defaultValue={dataUser.surname} className="form-control" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row  mb-4">
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input defaultValue={dataUser.username} className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input defaultValue={dataUser.phone} className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Role</label>
                                                <input defaultValue={dataUser.role} className="form-control" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col d-flex justify-content-end">
                                    <button className="btn btn-primary" type="button">Save Changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </>
    )
}
