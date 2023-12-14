import React from 'react'

export const Cellars = ({ name, description, location, size, availability, price }) => {
  return (
    <>
      <div className="card mb-3" style={{width: "80%", margin: " auto auto"}} >
        <div className="card-body">
          <div className="row g-10">
            <div className="col-md-4">
              <img src="https://www.df.cl/noticias/site/artic/20210125/imag/foto_0000000220210125121821.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col md-8">
              <div className="card-body">
                <div className="card-header">
                  <h5 className="card-title text-center">{name}</h5>
                </div>
                <p className="text-center">Medidas: {size} | {availability} | Precio: Q{price}</p>
                <p className="card-text">{description}</p>
                <blockquote className="blockquote mb-0">
                  <footer className="blockquote-footer text-end">{location}</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cellars;