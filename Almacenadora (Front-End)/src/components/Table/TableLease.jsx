import React from 'react'

export const TableLease = ({cellar, client, services, amount}) => {
    return (
        <>
        <td>{cellar}</td>
        <td>{client}</td>
        <td>{services}</td>
        <td>{amount}</td>
        </>
    )
}
