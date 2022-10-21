import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch }  from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <a className='icons' href="#"><FontAwesomeIcon icon={faSearch}/></a>
  )
}

export default SearchBar