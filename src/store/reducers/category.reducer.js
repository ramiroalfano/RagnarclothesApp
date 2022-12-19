import { Categories } from "../../data/categories";
import {Selected_Category} from '../actions/category.action'

const initialState = {
    categories: Categories,
    selected: null, 
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case Selected_Category: 
            const IndexCategory = state.categories.findIndex(
                (cat) => cat.id === action.categoryID
            );
            if(IndexCategory === -1) return state;
            return {...state, selected: state.categories[IndexCategory]};
            default:
                return state;
    }
};

export default CategoryReducer