import React, { useState } from "react";
import Navbar from "./components/navbar";
import Shop from "./components/shop";
import Cart from "./components/cart";

const App = () => {
	const [cart, setCart] = useState([]);
	const [showShop, setShowShop] = useState(true);

	const addToCart = (item) => {
		if (cart.indexOf(item) !== -1) return;
		setCart([...cart, item]);
	};

	const updateQty = (item, change) => {
		const itemIndex = cart.indexOf(item);
		const arr = cart;
		arr[itemIndex].amount += change;

		if (arr[itemIndex].amount === 0) arr[itemIndex].amount = 1;
		setCart([...arr]);
	};

	return (
		<div>
			<Navbar setShowShop={setShowShop}></Navbar>
			{showShop ? (
				<Shop addToCart={addToCart}></Shop>
			) : (
				<Cart cart={cart} setCart={setCart} updateQty={updateQty}></Cart>
			)}
		</div>
	);
};

export default App;
