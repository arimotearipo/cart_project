import React from "react";

// Passed as props from App.js: setShowShop={setShowShop}
const Navbar = (props) => {
	return (
		<div>
			<h3 onClick={() => props.setShowShop(true)}>Products</h3>
			<h3 onClick={() => props.setShowShop(false)}>My Cart</h3>
		</div>
	);
};

export default Navbar;
