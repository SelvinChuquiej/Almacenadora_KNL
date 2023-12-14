import React from 'react'
import { Navbar } from '../components/NavBar/Navbar'
import { Link, Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import cellarImg from '../Assents/Cellar.jpg'
import clientImg from '../Assents/Client.jpg'
import serviceImg from '../Assents/Service.jpg'
import accountImg from '../Assents/Account.jpeg'
import { NavBarAdmin } from '../components/NavBarAdmin/NavBarAdmin'

export const CrudPage = () => {
  return (
    <>
      <NavBarAdmin></NavBarAdmin>
      <br />
      <div className="container py-3">
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal text-uppercase"> Admin Options &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
              </svg>
            </h1>
            <p className="fs-5 text-muted">Unique option of the Administrator. Where you can enter the crud of the storage you can edit, delete and add</p>
          </div>
        </header>

        <main>
          <div className="row row-cols-1 row-cols-md-2 mb-2 text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal text-uppercase" >Cellars</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <img src={cellarImg} alt="Cellars Image" className='card-img' style={{ width: "95%", height: "95%" }} />
                  </ul>
                  <Link to={'cellars'}>
                    <button type="button" className="w-100 btn btn-lg btn-outline-warning">View</button>
                  </Link>
                </div>
              </div>
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal text-uppercase">Accounts</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <img src={accountImg} alt="Accounts Image" className="card-img" style={{ width: "95%", height: "95%" }} />
                  </ul>
                  <Link to='accounts'>
                    <button type="button" className="w-100 btn btn-lg btn-outline-warning">View</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal text-uppercase">Clients</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <img src={clientImg} alt="Clients Image" className="card-img" style={{ width: "95%", height: "95%" }} />
                  </ul>
                  <Link to='clients'>
                    <button type="button" className="w-100 btn btn-lg btn-outline-warning">View</button>
                  </Link>
                </div>
              </div>
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal text-uppercase">Services</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <img src={serviceImg} alt="Services Image" className="card-img" style={{ width: "95%", height: "95%" }} />
                  </ul>
                  <Link to={'services'}>
                    <button type="button" className="w-100 btn btn-lg btn-outline-warning">View</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </>
  )
}
