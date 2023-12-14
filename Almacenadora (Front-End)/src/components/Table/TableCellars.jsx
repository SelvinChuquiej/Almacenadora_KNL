import React from "react"


export const TableCellars = ({ name, description, location, size, availability, price }) => {

    return (
        <>
            <td className="align-middle text-center">
            </td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{location}</td>
            <td>{size}</td>
            <td>{availability}</td>
            <td>{price}</td>
        </>
    )
}
