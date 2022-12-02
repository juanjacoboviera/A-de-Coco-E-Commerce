import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch }  from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  // Este componente es de referencia y no tiene ninguna funcionalidad!!
  return (
    <a className='icons' href="#"><FontAwesomeIcon icon={faSearch}/></a>
  )
}

export default SearchBar