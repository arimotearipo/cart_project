import React, { useEffect, useState, useContext } from "react";
import ShopContext from "../context/shopcontext";

// prop passed from App.js : cart={cart} setCart={setCart} updateQty={updateQty}
const Cart = () => {

	const {cart, setCart, updateQty} = useContext(ShopContext);
	const [totalAmount, setTotalAmount] = useState(0);

	// Will delete the item on the selected index by using the filter method
	// The cart will be changed and updated
	// Will then call updatedPrice() to recalculate the total price
	const deleteItem = (idx) => {
		const updatedCart = cart.filter((item) => {
			return item.id !== idx;
		});
		setCart(updatedCart);
		updateTotalAmount();
	};

	const updateTotalAmount = () => {
		let sum = 0;
		cart.map((item) => (sum += item.amount * item.price));
		setTotalAmount(sum);
	};

	useEffect(() => {
		updateTotalAmount();
	});

	return (
		<div>
			{cart.map((item) => (
				<div className="cartproduct" key={item.id}>
					<p>Product: {item.name}</p> <p>Price: ${item.price}</p>
					<p>Quantity: {item.amount}</p>
					<button className="updateQtyBtn" type="button" onClick={() => updateQty(item, 1)}>
						+
					</button>
					<button className="updateQtyBtn" type="button" onClick={() => updateQty(item, -1)}>
						-
					</button>
					<div>
						<p>Subtotal: ${item.price * item.amount}</p>
						<button className="removeBtn" type="button" onClick={() => deleteItem(item.id)}>Remove</button>
					</div>
				</div>
			))}
			<div>
				<h3>Grand Total</h3>
				<h4>${totalAmount}</h4>
			</div>
		</div>
	);
};

export default Cart;
