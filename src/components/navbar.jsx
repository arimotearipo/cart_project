import React, {useContext} from "react";
import ShopContext from "../context/shopcontext";

// Passed as props from App.js: setShowShop={setShowShop}
const Navbar = () => {

	const {setShowShop} = useContext(ShopContext);
	return (
		<div>
			<button className="shopBtn" onClick={() => setShowShop(true)}>Products</button>
			<button className="cartBtn" onClick={() => setShowShop(false)}>My Cart</button>
		</div>
	);
};

export default Navbar;
