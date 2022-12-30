import React, {useContext} from "react";
import ShopContext from "../context/shopcontext";

const Product = (prop) => {

	const {addToCart} = useContext(ShopContext);

	return (
		<div>
			<p>Name: {prop.item.name}</p>
			<p>Price: ${prop.item.price}</p>
			<p>Description: {prop.item.des}</p>
			<button className="addToCartBtn"
				onClick={() => {
					addToCart(prop.item);
				}}
				type="button"
			>
				Add to Cart
			</button>
		</div>
	);
};

export default Product;
