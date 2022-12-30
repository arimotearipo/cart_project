import React from "react";
import { useDispatch } from "react-redux";
import { showShop, showCart } from "../actions";

const Navbar = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<button className="shopBtn" onClick={() => dispatch(showShop())}>
				Products
			</button>
			<button className="cartBtn" onClick={() => dispatch(showCart())}>
				My Cart
			</button>
		</div>
	);
};

export default Navbar;
