import React from 'react'

export const TableClients = ({name, surname, identification, residency}) => {
    return (
        <>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{identification}</td>
        <td>{residency}</td>            
        </>
    )
}
