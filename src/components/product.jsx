import React from "react";

const Product = (prop) => {
	return (
		<div>
			<p>Name: {prop.item.name}</p>
			<p>Price: ${prop.item.price}</p>
			<p>Description: {prop.item.des}</p>
			<button className="addToCartBtn"
				onClick={() => {
					prop.addToCart(prop.item);
				}}
				type="button"
			>
				Add to Cart
			</button>
		</div>
	);
};

export default Product;
