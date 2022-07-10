import React, {useState} from "react";
import '../components/SearchBar.css'

const SearchBar = (props) => {
    const [SearchBar, setSearchBar] = useState("Dito")
    const {onSearch} = props
    const onChangeHandler = (e) => {
        setSearchBar(e.target.value)
        if(e.target.value.length === 0){
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(SearchBar)
    }

    return (
        <div className="Search-back">
            <div className="SearchBar">
                <input placeholder="Buscar Pokémons" onChange={onChangeHandler}/>
            </div>
            <div className="Search-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
          
        </div>
    )
} 

export default SearchBar;