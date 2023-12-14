import { useState, useEffect } from 'react'
import React from 'react'
import { Cellars } from '../Cellars/Cellars'
import axios from 'axios';

const Canvas = () => {

  const [cellars, setCellars] = useState([{}]);
  const [tableCellars, setTableCellars] = useState([{}])
  const [search, setSearch] = useState("")

  const getCellars = async () => {
    try {
      const { data } = await axios.get('http://localhost:3200/cellar/getCellars');
      setCellars(data.cellar);
      setTableCellars(data.cellar)
      console.log(data.cellars)
    } catch (e) {
      console.log(e);
    }
  }

  const handleCangeSearch = (e) => {
    setSearch(e.target.value)
    filteSearch(e.target.value)
  }

  const filteSearch = (terminoBusqueda) => {
    var resultadosBusqueda = tableCellars.filter((elemento) => {
      if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        elemento.location.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return elemento
      }
    })
    setCellars(resultadosBusqueda)
  }

  useEffect(() => getCellars, [])

  return (
    <>
      <div className='container searchFilter'>
        <div className='searcFilterHijo'>
          <input className="form-control"
            value={search}
            onChange={handleCangeSearch}
            type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </div>
      </div>
      <br />
      {
        cellars.map(({ _id, name, description, location, size, availability, price }, index) => {
          return (
            <div key={index}>
              <Cellars
                name={name}
                description={description}
                location={location}
                size={size}
                availability={availability}
                price={price}
              ></Cellars>
            </div>
          )
        })
      }
    </>
  )
}

export default Canvas
