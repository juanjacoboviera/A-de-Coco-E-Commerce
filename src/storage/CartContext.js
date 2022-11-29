import { createContext, useState} from "react";

const cartContext = createContext();

 export const CartContextProvider = (props) =>{
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
 
    const addToCart = (itemData) =>{
        const newCart = [...cart]
        newCart.push(itemData)
        const ids = newCart.map(o => o.id)
        const filtered = newCart.filter(({id}, index) => !ids.includes(id, index + 1))
        setCart(filtered)
    }

    const deleteFromCart = (id) =>{
        const newCart = [...cart];
        const filtered = newCart.filter((product) => product.id !== id)
        setCart(filtered)
    }

    const totalInCart = () =>{
        const newCart = [...cart];
        const totalPerProduct = newCart.map(product => product.price * product.quantity)
        const total = totalPerProduct.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
          );
          setCartTotal(total);
    }
    
    const value = {
        cart,
        addToCart,
        deleteFromCart,
        totalInCart,
        cartTotal
    };

return(
    <cartContext.Provider value={{value}}>
        {props.children}
    </cartContext.Provider>
)
}

export default cartContext;