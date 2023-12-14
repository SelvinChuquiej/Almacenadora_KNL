import React, { createContext, useContext, useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { AccountPage } from './Pages/AccountPage';
import { CellarsPage } from './Pages/CellarsPage';
import { ClientsPage } from './Pages/ClientsPage';
import { CrudPage } from './Pages/CrudPage';
import { HomePage } from './Pages/HomePage';
import { LeasePage } from './Pages/LeasePage';
import { LoginPage } from './Pages/LoginPage';
import { MainPage } from './Pages/MainPage/MainPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { ProfilePage } from './Pages/ProfilePage';
import { Redirigir } from './Pages/Redirigir';
import { RegisterPage } from './Pages/RegisterPage';
import { ServicesPage } from './Pages/ServicesPage';
import { AddAccount } from './components/Add/AddAccount';
import { AddCellars } from './components/Add/AddCellars';
import { AddClient } from './components/Add/AddClient';
import { AddLease } from './components/Add/AddLease';
import { AddService } from './components/Add/AddService';
import { UpdateAccount } from './components/Update/UpdateAccount';
import { UpdateCellar } from './components/Update/UpdateCellar';
import { UpdateClient } from './components/Update/UpdateClient';
import { UpdateLease } from './components/Update/UpdateLease';
import { UpdateService } from './components/Update/UpdateService';

export const AuthContext = createContext();

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({
        id: '',
        name: '',
        username: '',
        surname: '',
        role: '',
        phone: ''
    })

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) setLoggedIn(true)
    }, [])

    const routes = createBrowserRouter([
        {
            path: '',
            element: <App></App>,
            errorElement: <NotFoundPage></NotFoundPage>,
            children: [
                {
                    path: '/',
                    element: <MainPage></MainPage>
                },
                {
                    path: '/login',
                    element: <LoginPage></LoginPage>
                },
                {
                    path: '/home',
                    element: <HomePage></HomePage>
                },
                {
                    path: '/register',
                    element: <RegisterPage></RegisterPage>
                },
                {
                    path: '/crud',
                    element: loggedIn ? <Redirigir></Redirigir> : <LoginPage></LoginPage>,
                    children: [
                        {
                            path: '',
                            element: <CrudPage></CrudPage>
                        },
                        {
                            path: 'profile',
                            element: <ProfilePage></ProfilePage>
                        },
                        {
                            path: 'cellars',
                            element: <CellarsPage></CellarsPage>,
                        },
                        {
                            path: 'cellars/addCellar',
                            element: <AddCellars></AddCellars>
                        },
                        {
                            path: 'cellars/update/:id',
                            element: <UpdateCellar></UpdateCellar>
                        },
                        {
                            path: 'clients',
                            element: <ClientsPage></ClientsPage>
                        },
                        {
                            path: 'clients/add',
                            element: <AddClient></AddClient>
                        },
                        {
                            path: 'clients/update/:id',
                            element: <UpdateClient></UpdateClient>
                        },
                        {
                            path: 'accounts',
                            element: <AccountPage></AccountPage>
                        },
                        {
                            path: 'accounts/add',
                            element: <AddAccount></AddAccount>
                        },
                        {
                            path: 'accounts/update/:id',
                            element: <UpdateAccount></UpdateAccount>
                        },
                        {
                            path: 'services',
                            element: <ServicesPage></ServicesPage>
                        },
                        {
                            path: 'services/add',
                            element: <AddService></AddService>
                        },
                        {
                            path: 'services/update/:id',
                            element: <UpdateService></UpdateService>
                        },
                        {
                            path: 'lease',
                            element: <LeasePage></LeasePage>
                        },
                        {
                            path: 'lease/addLease',
                            element: <AddLease></AddLease>
                        },
                        {
                            path: 'lease/updateLease/:id',
                            element: <UpdateLease></UpdateLease>
                        }
                    ]
                }
            ]
        }
    ])

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }}>
            <RouterProvider router={routes} />
        </AuthContext.Provider>
    )
}
