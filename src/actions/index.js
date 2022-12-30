import * as actionTypes from "./actionTypes";

export const addToCart = (item) => {
	return {
		type: actionTypes.ADD_TO_CART,
		payload: item,
	};
};

export const updateQty = (item, change) => {
	return {
		type: actionTypes.UPDATE_QTY,
		item: item,
		change: change,
	};
};

export const showCart = () => {
	return {
		type: actionTypes.SHOW_CART,
	};
};

export const showShop = () => {
	return {
		type: actionTypes.SHOW_SHOP,
	};
};
