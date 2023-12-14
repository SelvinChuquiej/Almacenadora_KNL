import React from 'react'

export const Admin = ({ name, surname, username, password, phone, role }) => {
    return (
        <>
            <div className="e-profile">
                <div className="row">
                    <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{name}</h4>
                            <p className="mb-0">{username}</p>
                        </div>
                    </div>
                </div>
                <div className="tab-content pt-3">
                    <div className="tab-pane active">
                        <form className="form" noValidate="">
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input defaultValue={name} className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Surname</label>
                                                <input defaultValue={surname} className="form-control" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input defaultValue={username} className="form-control" type="text"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input defaultValue={phone} className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label>Role</label>
                                                <input defaultValue={role} className="form-control" type="text"/>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col d-flex justify-content-end">
                                    <button className="btn btn-primary" type="submit">Save Changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
