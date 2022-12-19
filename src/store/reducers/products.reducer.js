import { Products } from '../../data/products'
import { Selected_Products, Filtered_Products } from '../actions/products.action';


const initialState = {
    products: Products,
    Filtered_Products: [],
    selected: null,
};

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Selected_Products:
            return {
                ...state,
                selected: state.products.find((products) => products.id === action.productsID)
            }
        case Filtered_Products:
            return {
                ...state,
                filteredProducts: state.products.filter((products) => products.category === action.categoryID)
            }
        default:
            return state;
    };
}

export default ProductsReducer