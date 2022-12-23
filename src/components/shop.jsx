import React from "react";
import list from "../data";
import Product from "./product";

const Shop = (prop) => {
	return (
		<div>
			{list.map((item) => {
				return <Product key={item.id} item={item} addToCart={prop.addToCart} />;
			})}
		</div>
	);
};

export default Shop;
