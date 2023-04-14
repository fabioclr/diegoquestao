import React from 'react'

const Row = ({linha}) => {
    const keys = Object.keys(linha)
    return (
        <tr key = {linha.nome}>
            {
                keys.map(key => <td key={key}>{linha[key]}</td>)
            }
        </tr>
        )
}

const TabelaDados = ({data}) => {
    const keys = Object.keys(data[0])
    return (
        <table cellPadding={10} align='center'  border='solid black'>
            <thead>
            <tr>  
            {
                keys.map(key => <th key={key}>{key} </th>)
            }
            </tr>
            </thead>
            <tbody >
                {data.map((linha) => (<Row linha={linha} />))}
            </tbody>
        </table>
    )
}

export default TabelaDados