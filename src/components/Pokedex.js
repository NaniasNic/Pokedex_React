import React from 'react'
import Pokemon from './Pokemon'
import Pages from './Pages'

const Pokedex = (props) => {
    const {pokemons, loading, setPage, Page, totalPages} = props
    const onClickLeftHandler = () => {
        if(Page+1 !== totalPages){
            setPage(Page + 1)
        }
    }

    const onClickRightHandler = () => {
        if(Page > 0){
            setPage(Page - 1)
        }
    }

    return (
        <div>
            <div className='poke-titu'>
                <h1>Pokédex</h1>
                <Pages Page={Page+1} totalPages={totalPages} onClickLeft={onClickLeftHandler} onClickRight={onClickRightHandler} />
            </div>
            
            {loading ? (
                <div className='lod'><h1>Carregando Sua Pokédex</h1></div>
            ) : (
                <div className='poke-grid'>
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                           <Pokemon key={index} pokemon={pokemon}/>
                        )
                    })}
                </div>
            )}
           

        </div>
    )
        
}

export default Pokedex;
