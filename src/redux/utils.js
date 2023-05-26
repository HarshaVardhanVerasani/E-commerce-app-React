import { useSelector } from "react-redux";



export function handleAddOrRemoveFromCart(e, id) {
   
  if (e.target.name === "ADD_TO_CART") {
    let findProduct = store.find((product) => product.id === Number(id));
    findProduct = { ...findProduct, quantity: 1 };
    dispatch(addToCart(findProduct));
  } else if (e.target.name === "REMOVE_FROM_CART") {
    let newCart = cart.filter((product) => product.id !== Number(id));
    dispatch(removeFromCart(newCart));
  }
}
