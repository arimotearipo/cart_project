import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/navbar";
// import Shop from "./components/shop";
// import Cart from "./components/cart";

const App = () => {
	const showCart = useSelector((state) => state.showCart);
	console.log(showCart);
	return (
		<div>
			<Navbar></Navbar>
			{showCart ? <p>Cart</p> : <p>Shop</p>}
		</div>
	);
};

export default App;
