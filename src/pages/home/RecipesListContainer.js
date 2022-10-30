import React from 'react'
import recipe1 from '../../assets/barras_momias_720x.webp'
import recipe2 from '../../assets/galletas_halloween_720x.webp'
import recipe3 from '../../assets/muffins_arandanosadecoco_720x.webp'
import CardComponent from '../../components/CardComponent'

const RecipesListContainer = () => {
    const recipesList = [
        {name: "MOMIAS DE CEREAL CON COCO", img: recipe1},
        {name: "GALLETAS DE COCO EN FORMA DE MURCIÉLAGO", img: recipe2},
        {name: "MUFFINS DE COCO CON ARÁNDANOS", img: recipe3},
    ]
  return (
    <div className='recipes__section'>
        <p>¡No hay que ser experto para tener platos deliciosos y saludables en tu mesa! Atrévete a darle un toque especial a tus comidas con este práctico</p>
        <h3>RECETARIO</h3>
        <div className='recipes__container'>
            {recipesList.map((recipe, index) =>  <CardComponent key={index} name={recipe.name} img={recipe.img}/>)}
        </div>
    </div>
  )
}

export default RecipesListContainer