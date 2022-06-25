import React from "react";
import {FaSearch} from 'react-icons/fa';

const Search = ({search, handleChange, handleSubmit}) => {
    return(
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <label className="search" htmlFor="search"></label>
                <input className="search-input" type="text" id='search' name='search' onChange={handleChange}/>
            </form>
        </div>
    )
}

export default Search;