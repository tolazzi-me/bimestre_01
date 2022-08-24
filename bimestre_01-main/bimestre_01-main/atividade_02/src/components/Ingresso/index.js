import React from 'react';

const Ingresso = ({ ...props }) => {

    console.log(props)

    const {
        ingresso, camarote1, camarote2, front, pista

    } = props;

    return (<div> <h1> {ingresso}</h1> <p><strong>Camarote(open-bar):</strong>{camarote1}</p>
        <p><strong>camarote:</strong>{camarote2}</p>
        <p><strong>Front-stage:</strong>{front}</p>
        <p><strong>pista:</strong>{pista}</p>
    </div>)
}
export default Ingresso;