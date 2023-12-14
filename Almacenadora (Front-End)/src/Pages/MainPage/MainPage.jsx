import React from 'react'
import './MainPage.css'
import imageHeader from '../../Assents/fondoMain.png';
import img1 from '../../Assents/Bodega1.jpg'
import img2 from '../../Assents/Bodega2.png';
import { Navbar } from '../../components/NavBar/Navbar.jsx';
import { Footer } from '../../components/Footer/Footer'
import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <br />
      <main>
        <div className="jumbotron text-center " style={{ backgroundImage: `url(${imageHeader})`, backgroundSize: 'cover', width: '100%', height: '450px' }}>
          <div className="r col-6 align-self-center" >
            <div className='tor'>
              <h1 className="display-4 text-white font-weight-bold" id='title'>Almacenadora KNL</h1>
              <p className="lead text-light" id='info' style={{ marginBottom: '20px' }}>
                Somos una empresa de almacenamiento líder en el mercado,
                dedicada a proporcionar soluciones integrales de almacenamiento y gestión
                de mercancías. Nuestro objetivo es ayudar a nuestros clientes a optimizar sus
                operaciones logísticas y mejorar su eficiencia en la cadena de suministro.</p>
              <Link to={'/login'} className="btn btn-warning btn-lg">
                Log In
              </Link>
            </div>
          </div>
        </div>

        <div className="container mt-5" style={{ marginBottom: '10vh' }}>
          <h1 className="text-center text-uppercase text-muted">Acerca de Nosotros</h1>
          <p className="text-center">¡Confía en nosotros para guardar tus productos con profesionalismo y seguridad!</p>
          <div className="row mt-4">
            <div className="col-md-6" style={{ backgroundImage: `url(${img1})`, height: '23em', backgroundSize: 'cover' }}></div>
            <div className="col-md-6" style={{ backgroundColor: '#faba668e', padding: '5vh', borderTopRightRadius: '50px', height: '23em' }}>
              <h2 className='text-center' style={{ display: ' flex', alignItems: 'center', justifyContent: 'center', minHeight: '15vh' }} >¿Qué ofrecemos?</h2>
              <p className='text-center' style={{ display: ' flex', alignItems: 'center', justifyContent: 'center' }}>
                Somos una almacenadora líder en el mercado, especializada en brindar soluciones de almacenamiento y logística
                a empresas de todos los tamaños. Contamos con instalaciones modernas y seguras, así como con un equipo
                experimentado que se encarga de garantizar la integridad de tus productos en todo momento.</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6" style={{ backgroundColor: '#f77c3e8e', padding: '5vh', borderBottomLeftRadius: '50px', height: '23em' }}>
              <h2 className='text-center' style={{ display: ' flex', alignItems: 'center', justifyContent: 'center', minHeight: '15vh' }} >¿Por qué elegirnos?</h2>
              <p className='text-center' style={{ display: ' flex', alignItems: 'center', justifyContent: 'center' }}>
                Nuestro compromiso con la calidad y la excelencia en el servicio nos ha convertido en la opción preferida
                para muchas empresas. Ofrecemos tarifas competitivas, opciones de almacenamiento flexibles y un servicio al
                cliente inigualable. Ya sea que necesites almacenar productos perecederos o productos
                de alto valor, podemos adaptarnos a tus necesidades específicas.</p>
            </div>
            <div className="col-md-6" style={{ backgroundImage: `url(${img2})`, height: '23em' }}>
            </div>
          </div>
        </div>

        <section className='resenas'>
          <div className="container" id='resss'>
            <h2 className='text-center h1 text-white'>Reseñas de nuestros clientes</h2>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex justify-content-center">
                    <div className="row" style={{ width: '98%', marginTop: '10px' }}>
                      <div className="col-md-6">
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <div className="media">
                              <div className="mediaLeft">
                                <i className="materialIcons">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                  </svg>
                                </i>
                              </div>
                              <div className="mediaBody">
                                <h4 className="mediaHeading">Juan Pérez</h4>
                                <div className="stars">
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star">&#9734;</span>
                                </div>
                                <p>"Mi experiencia con esta almacenadora fue excelente. Los precios son muy competitivos y el personal es muy profesional. Sin duda recomendaría este lugar a cualquiera que necesite un lugar seguro y confiable para almacenar sus cosas."</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <div className="media">
                              <div className="mediaLeft">
                                <i className="materialIcons">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                  </svg>
                                </i>
                              </div>
                              <div className="mediaBody">
                                <h4 className="mediaHeading">María González</h4>
                                <div className="stars">
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star">&#9734;</span>
                                  <span className="star">&#9734;</span>
                                </div>
                                <p>"La almacenadora es muy limpia y segura. Me gusta que tienen un sistema de cámaras de seguridad y siempre había personal vigilando el lugar. Sin embargo, la única queja que tengo es que a veces el proceso de alquiler puede ser un poco confuso y me llevó un tiempo entender todo el papeleo."</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center">
                    <div className="row" style={{ width: '98%', marginTop: '10px' }}>
                      <div className="col-md-6">
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <div className="media">
                              <div className="mediaLeft">
                                <i className="materialIcons">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                                  </svg>
                                </i>
                              </div>
                              <div className="mediaBody">
                                <h4 className="mediaHeading">Luis Gomez</h4>
                                <div className="stars">
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star">&#9734;</span>
                                  <span className="star">&#9734;</span>
                                </div>
                                <p>"Excelente servicio. Utilicé esta almacenadora para guardar mis pertenencias durante mi mudanza y todo salió perfecto. El personal fue muy amable y me ayudó a encontrar el tamaño de almacenamiento adecuado para mis necesidades. ¡Muy recomendado!"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <div className="media">
                              <div className="mediaLeft">
                                <i className="materialIcons">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                  </svg>
                                </i>
                              </div>
                              <div className="mediaBody">
                                <h4 className="mediaHeading">Lucía Ruiz</h4>
                                <div className="stars">
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                </div>
                                <p>"La mejor opción de almacenamiento en la ciudad. He estado utilizando esta almacenadora durante varios meses y nunca he tenido ningún problema. Las instalaciones están siempre limpias y seguras. El único inconveniente que encuentro, es el costo un poco elevado"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center">
                    <div className="row" style={{ width: '98%', marginTop: '10px' }}>
                      <div className="col-md-6">
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <div className="media">
                              <div className="mediaLeft">
                                <i className="materialIcons">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                  </svg>
                                </i>
                              </div>
                              <div className="mediaBody">
                                <h4 className="mediaHeading">Eduardo García</h4>
                                <div className="stars">
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star">&#9734;</span>
                                  <span className="star">&#9734;</span>
                                  <span className="star">&#9734;</span>
                                </div>
                                <p>"En mi opinión, la experiencia con esta almacenadora no fue la mejor. Aunque las instalaciones están limpias y organizadas, me pareció que los precios eran demasiado elevados en comparación con otras opciones del mercado. Además, la atención al cliente fue confusa y poco clara en algunos momentos."</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6" >
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <div className="media">
                              <div className="mediaLeft">
                                <i className="materialIcons">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                                  </svg>
                                </i>
                              </div>
                              <div className="mediaBody">
                                <h4 className="mediaHeading">Coca-Cola</h4>
                                <div className="stars">
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star filled">&#9733;</span>
                                  <span className="star">&#9734;</span>
                                </div>
                                <p>"La almacenadora es muy profesional en todo lo que hace. Me impresionó la organización que tienen y cómo se aseguran de que cada cliente tenga su espacio privado y seguro para guardar sus pertenencias. Lo recomiendo ampliamente".</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>
          <hr></hr>
          <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            <form className="formulario">
              <h2 className='text-center'>Añadir reseña</h2>
              <h6 className='text-center'>Calificación</h6>
              <div className="star-rating">
                <input type="radio" id="star5" name="rating" value="5" />
                <label htmlFor="star5"></label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label htmlFor="star4"></label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label htmlFor="star3"></label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label htmlFor="star2"></label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label htmlFor="star1"></label>
              </div>
              <div className="form-group">
                <label htmlFor="nameInput">Nombre:</label><br /><br />
                <input type="text" className="form-control" id="nameInput" placeholder="Ingresa tu nombre" />
              </div><br />
              <div className="form-group">
                <label htmlFor="commentInput">Comentario:</label><br /><br />
                <textarea className="form-control " id="commentInput" rows="3" placeholder="Ingresa tu comentario "></textarea>
              </div>
              <br />
              <center><button type="submit" className="btn btn-warning btn-lg">Enviar</button></center>
            </form>
          </div>
        </section>
        <hr></hr>
      </main>
      <Footer></Footer>
    </>
  )
}
