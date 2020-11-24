import React from 'react';
import './Table.css';
import Numeral from 'numeral';
function Table({countries}) {
    return (
        <div className="table">
            {countries.map(country => (
                <tr>
                    <td>{country.country}</td>
                    <td><strong>{Numeral(country.cases).format('0,0')}</strong></td>
                </tr>

            )
                )}
        </div>
    )
}

export default Table
