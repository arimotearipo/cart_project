import * as actionTypes from "../actions/actionTypes";
import initialState from "../store/initialState";

const navbarReducer = (prevState = initialState, action) => {
	switch (action.type) {
		case actionTypes.SHOW_CART:
			// Switching to the cart page
			return {
				...prevState,
				showCart: true,
			};
		case actionTypes.SHOW_SHOP:
			// Switching to the product page
			return {
				...prevState,
				showCart: false,
			};
		default:
			return prevState;
	}
};

export default navbarReducer;
