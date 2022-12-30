import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	showCart: false,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		/*
        action property:
        item
        */
		addItem: (state, action) => {
			if (state.cart.find(action.item) !== -1) return;
			state.cart.push(action.item);
		},
		/*
        action property:
        item
        change
        */
		updateQty: (state, action) => {
			const itemIndex = state.cart.map((i) => i.id).indexOf(action.item.id);
			state.cart[itemIndex].amount += action.change;
		},
	},
});

export const reducer = cartSlice.reducer;
export const cakeActions = cartSlice.actions;
