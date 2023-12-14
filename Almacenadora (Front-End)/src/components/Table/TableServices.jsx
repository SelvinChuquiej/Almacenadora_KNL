import React from 'react'

export const TableServices = ({name, price, description}) => {
    return (
        <>
            <td>{name}</td>
            <td>{price}</td>
            <td>{description}</td>
        </>
    )
}
