const produce = require("immer").produce;
const redux = require("redux");
const createStore = redux.createStore;

const productlist = {
	items: [
		{ id: 0, name: "Apple", price: 5, des: "Tasty fruit", amount: 1 },
		{ id: 1, name: "Table", price: 10, des: "Can holds stuff", amount: 1 },
		{ id: 2, name: "Shirt", price: 15, des: "Very comfortable", amount: 1 },
		{ id: 3, name: "Clock", price: 12, des: "Tells the time", amount: 1 },
		{ id: 4, name: "House", price: 5000, des: "Keeps you safe", amount: 1 },
		{ id: 5, name: "Curtain", price: 650, des: "Privacy", amount: 1 },
	],
	showMe: false,
};

const ADD_ITEM = "ADD_ITEM";

const initialState = {
	item: [],
};

const addItem = (item) => {
	return {
		type: ADD_ITEM,
		payload: item,
	};
};

const reducer = (prevState = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...prevState,
				item: [...prevState.item, action.payload],
				showMe: false,
			};
		default:
			return prevState;
	}
};

const toAdd = { id: 0, name: "Apple", price: 5, des: "Tasty fruit", amount: 1 };
const store = createStore(reducer);
store.dispatch(addItem(toAdd));
console.log(store.getState().showMe);
