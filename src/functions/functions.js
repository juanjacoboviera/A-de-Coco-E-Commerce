import { categoryContent } from "../data/categoryContent";
import { products } from "../data/products";

export const getItemsByCategory = (categoryId) =>{
    if(categoryId === 'Todos'){
        return products
    }else{
        let filteredItems = products.filter(products => {
           return products.category == categoryId;
        })
        return filteredItems
    }
}

export const getCategories = (categoryId) =>{
    let filteredItems = categoryContent.find(category => {
       return category.id == categoryId;
    })
    return filteredItems
}

export const getSingleProduct = (producto) =>{
    let filteredItems = products.find(product => {
       return product.id == producto;
    })
    return filteredItems
}