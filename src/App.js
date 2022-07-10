import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons, SearchPokemon } from "./components/Api";
import Menu from './components/Menu';
import Pokedex from './components/Pokedex';
import SearchBar from './components/SearchBar';

import './App.css';

function App() {
  const [Page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound ] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 24
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * Page);
      const promises = data.results.map(async (pokemon) => {
        return getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage)) 
    } catch (error) {
      console.log("fetchPokemon error: ", error)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [Page]);


  const onSearchHandler = async (pokemon) => {
    if(!pokemon){
      return fetchPokemons();
    }

    setLoading(true)
    setNotFound(false)
    const results = await SearchPokemon(pokemon)
      if(!results){
        setLoading(false)
        setNotFound(true)
      } else {
        setPokemons([results])
        setPage(0)
        setTotalPages(1)
      }
    setLoading(false)
  }

  return (
   <div>
      <Menu/>
      <SearchBar onSearch={onSearchHandler} />
      {notFound ? (
        <div className="not-found-txt"><h1>Pokemon não encontrado ou ainda não foi capturado</h1></div>
      ) : (
        <Pokedex pokemons={pokemons} loading={loading} Page={Page} totalPages={totalPages} setPage={setPage} />
      )}

   </div>
  );
}

export default App;
