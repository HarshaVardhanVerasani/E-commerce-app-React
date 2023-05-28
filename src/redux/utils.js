export function deleteItem(cart, id) {
  let findProduct = cart.filter((product) => product.id !== Number(id));
  return findProduct;
}


export function addItem(totalProducts,cart,id) {
  //This ensures not to add duplicate items in cart
  if(cart.some(p => p.id === +id)){
    return null
  }

  //this will ensures to add new item to cart with new property name quantity
  let findProduct = totalProducts.find((product) => product.id === Number(id));
  let Item = { ...findProduct, quantity: 1 };
  return Item;
}


export function decrement(state, action){
  let itemToUpdate = state.CartItems.find(
    (product) => product.id === action.payload
  );
  if (itemToUpdate.quantity !== 1) {
    itemToUpdate.quantity -= 1;
  }
}

export function increment(state,action) {
   let itemToUpdate = state.CartItems.find(
     (product) => product.id === action.payload
   );
   itemToUpdate.quantity += 1;
}