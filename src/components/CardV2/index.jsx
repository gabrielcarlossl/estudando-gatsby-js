import React from 'react'
import { Link } from 'gatsby'

function CardV2({nomeBotao, texto, titulo, path}) {
    return (
        <div class="card" style={{width: 18 +'rem', marginRight: 10 + 'px'}}>
            
                <div class="card-body" style={{margin: 10 +'px'}}>
                    <h5 class="card-title">{titulo}</h5>
                    <p class="card-text">{texto}</p>
                    <Link class="btn btn-primary" to={path}>{nomeBotao}</Link>
                </div>
        </div>
    )
}

export default CardV2