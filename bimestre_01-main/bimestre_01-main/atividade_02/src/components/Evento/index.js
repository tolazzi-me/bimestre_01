import React from 'react';

const Evento = ({ ...props }) => {

    console.log(props)

    const {
        nome, data, horario, local, cidade, genero

    } = props;

    return (<div> <h1> {nome} </h1> <p><strong>data:</strong>{data}</p>
        <p><strong>horario:</strong>{horario}</p>
        <p><strong>local:</strong>{local}</p>
        <p><strong>cidade:</strong>{cidade}</p>
        <p><strong>genero:</strong>{genero}</p>
    </div>)
}




export default Evento;