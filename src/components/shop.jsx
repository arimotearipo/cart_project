import React from "react";
import list from "../data";
import Product from "./product";

const Shop = () => {
	return (
		<div>
			{list.map((item) => {
				return <Product key={item.id} item={item}/>;
			})}
		</div>
	);
};

export default Shop;
