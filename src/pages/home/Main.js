import React from 'react'
import CategoryListContainer from './categoryListContainer/CategoryListContainer'
import Maintitle from './MainTitle'
import RecipesListContainer from './RecipesListContainer'

const Main = () => {
  return (
    <main>
        <Maintitle/>
        <CategoryListContainer/>
        <RecipesListContainer/>
    </main>
  )
}

export default Main