import React from 'react'

function Pokemon(props) {
    const {pokemon} = props
  return (
    <div className='Pokemon-card'>
        <div className='Pokemon-img-container'>
            <img alt={pokemon.name} src={pokemon.sprites.front_default} className='Pokemon-img' />
        </div>
        <div className='card-body'>
            <div className='card'>
                <h3>{pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>
            <div className='card-bot'>
                <div className='type'>
                    {pokemon.types.map((type, index) => {
                        return (
                            <div key={index} className='type-text'>{type.type.name}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pokemon
