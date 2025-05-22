import { useReducer, useEffect } from "react";
import { shoppingInitialState } from "@/shoppingReducer/shoppingInitialState";
import { shoppingReducer } from "@/shoppingReducer/shoppingReducer";
import { TYPES } from "@/shoppingReducer/shoppingActions";
import Product from "./Product";
import CartItem from "./CartItem";
import axios from "axios";

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const {products, cart} = state;

    const readState = async () => {
      const ENDPOINTS = {
        products: "http://localhost:5000/products",
        cart: "http://localhost:5000/cart"
      }
      const responseProducts = await axios.get(ENDPOINTS.products),
        responseCart = await axios.get(ENDPOINTS.cart)

      const productsData = await responseProducts.data,
        cartData = await responseCart.data

      dispatch({type: TYPES.READ_STATE, payload: {
        products: productsData,
        cartItems: cartData
      }})
    }

    useEffect(() => {
      readState()
    }, [])
    

    const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id})

    const deleteFromCart = (id, all = false) => {
      if (all) {
        dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})
      } else {
        dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})
      }
    }

    const clearCart = () => dispatch({type: TYPES.CLEAR_CART})


  return (
    <>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {
            products.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)
        }
      </div>   
      <h3>Carrito</h3>
      <div className="box">
        {
            cart.map((item, index) => <CartItem key={index} item={item} deleteFromCart={deleteFromCart} />)
        }
      </div>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  );
};

export default ShoppingCart;
