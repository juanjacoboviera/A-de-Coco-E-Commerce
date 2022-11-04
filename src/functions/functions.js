import { categoryContent } from "../data/categoryContent";
import { products } from "../data/products";

export const getItemsByCategory = (categoryId) =>{
    let filteredItems = products.filter(products => {
       return products.category == categoryId;
    })
    return filteredItems
}

export const getCategories = (categoryId) =>{
    let filteredItems = categoryContent.find(category => {
       return category.id == categoryId;
    })
    return filteredItems
}