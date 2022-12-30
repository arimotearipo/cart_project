import * as actionTypes from "../actions/actionTypes";
import { produce } from "immer";
import initialState from "../store/initialState";

const cartReducer = (prevState = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			// Use find to check if the item is already in the cart
			// If it is, break
			if (prevState.cart.find(action.item) !== -1) break;
			return {
				...prevState,
				item: [...prevState.item, action.item],
			};
		case actionTypes.UPDATE_QTY:
			// Use the map() method to get index of item that has
			// the same id as item that was passed as action property
			const itemIndex = prevState.cart.map((i) => i.id).indexOf(action.item.id);

			// Use immer's produce to easily update the sub-property
			// inside a nested object
			const newArray = produce(prevState, (draft) => {
				draft.cart.action.item[itemIndex].amount =
					prevState.cart.action.item[itemIndex].amount + action.change;
			});
			return {
				...prevState,
				newArray,
			};
		default:
			return prevState;
	}
};

export default cartReducer;
