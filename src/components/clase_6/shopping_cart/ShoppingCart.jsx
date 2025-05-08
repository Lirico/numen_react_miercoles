import { useReducer } from "react";
import { shoppingInitialState } from "@/shoppingReducer/shoppingInitialState";
import { shoppingReducer } from "@/shoppingReducer/shoppingReducer";
import { TYPES } from "@/shoppingReducer/shoppingActions";
import Product from "./Product";
import CartItem from "./CartItem";

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const {products, cart} = state;

    const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id})

    const deleteFromCart = (id) => dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})

    const clearCart = () => dispatch({type: TYPES.CLEAR_CART})


  return (
    <>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {
            products.map(product => <Product product={product} addToCart={addToCart} />)
        }
      </div>   
      <h3>Carrito</h3>
      <div className="box">
        {
            cart.map(item => <CartItem item={item} deleteFromCart={deleteFromCart} />)
        }
      </div>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  );
};

export default ShoppingCart;
