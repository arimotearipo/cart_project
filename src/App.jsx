import React, { useState } from "react";
import Navbar from "./components/navbar";
import Shop from "./components/shop";
import Cart from "./components/cart";
import ShopContext from "./context/shopcontext"

const App = () => {
	const [cart, setCart] = useState([]);
	const [showShop, setShowShop] = useState(true);

	const addToCart = (item) => {
		if (cart.indexOf(item) !== -1) return;
		setCart([...cart, item]);
	};

	const updateQty = (item, change) => {
		const itemIndex = cart.indexOf(item);
		const arr = cart; // Assign the cart to an arr variable (making a copy)
		arr[itemIndex].amount += change; // We then mutate the arr variable

		if (arr[itemIndex].amount === 0) arr[itemIndex].amount = 1;
		setCart([...arr]); // Use setCart to set the arr as the state. This is because we can mutate the cart item directly
	};

	return (
		<ShopContext.Provider value={{setShowShop, addToCart, cart, setCart, updateQty}}>
			<Navbar></Navbar>
			{showShop ? (
				<Shop></Shop>
			) : (
				<Cart></Cart>
			)}
		</ShopContext.Provider>
			
	);
};

export default App;
