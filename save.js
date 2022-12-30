// const addToCart = (item) => {
// 	if (cart.indexOf(item) !== -1) return;
// 	setCart([...cart, item]);
// };

// const updateQty = (item, change) => {
// 	const itemIndex = cart.indexOf(item);
// 	const arr = cart; // Assign the cart to an arr variable (making a copy)
// 	arr[itemIndex].amount += change; // We then mutate the arr variable

// 	if (arr[itemIndex].amount === 0) arr[itemIndex].amount = 1;
// 	setCart([...arr]); // Use setCart to set the arr as the state. This is because we can mutate the cart item directly
// };
