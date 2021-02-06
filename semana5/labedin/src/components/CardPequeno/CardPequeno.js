import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){
    return (
        <div className="cardpequeno-container">
             <div>
                <img src={ props.imagem } />
                
                <p>{ props.email }</p>
                <p>{ props.endereco}</p>
            </div>
        </div>
    )

}

export default CardPequeno;