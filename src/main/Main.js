import React from 'react'
import ItemListContainer from '../itemListContainer/ItemListContainer'

const Main = () => {
    const greeting = "Hello World!"
  return (
    <main>
        <ItemListContainer greeting={greeting}/>
    </main>
  )
}

export default Main