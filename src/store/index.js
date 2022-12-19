import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import ProductsReducer from "./reducers/products.reducer";
import AuthReducer from "./reducers/auth.reducer";
import OrderReducer from "./reducers/order.reducer";

const RootReducer = combineReducers ({
    categories: CategoryReducer,
    products: ProductsReducer,
    cart: CartReducer,
    orders: OrderReducer,
    auth: AuthReducer
})

export default createStore(RootReducer, applyMiddleware(thunk) )
