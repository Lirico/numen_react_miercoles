import { TYPES } from "./shoppingActions";



export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            console.log(action.payload)
        }
        case TYPES.REMOVE_ONE_PRODUCT: {
            console.log(action.payload)
        }
        case TYPES.REMOVE_ALL_PRODUCTS: {}
        case TYPES.CLEAR_CART: {}
        default:
            return state;
    }
}
 