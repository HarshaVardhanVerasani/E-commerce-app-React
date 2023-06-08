export function deleteItem(cart, id) {
  let products = cart.filter((product) => product.id !== Number(id));
  return products;
}

export function addItem(totalProducts, cart, id) {
  //This ensures not to add duplicate items in cart
  if (cart.some((p) => p.id === +id)) {
    return null;
  }

  //this will ensures to add new item to cart with new property name quantity
  let findProduct = totalProducts.find((product) => product.id === Number(id));
  let Item = { ...findProduct, quantity: 1 };
  return Item;
}

export function addToFav(state, id) {
  let findFavItem = state.__Products.find((product) => product.id === +id);
  return findFavItem;
}

export function deleteFav(state, id) {
  let newFavList = state.Favorite.filter((product) => product.id !== +id);
  return newFavList;
}

export function decrement(state, action) {
  let itemToUpdate = state.CartItems.find(
    (product) => product.id === action.payload
  );
  if (itemToUpdate.quantity !== 1) {
    itemToUpdate.quantity -= 1;
  }
}

export function increment(state, action) {
  let itemToUpdate = state.CartItems.find(
    (product) => product.id === action.payload
  );
  itemToUpdate.quantity += 1;
}

export function sortProducts(state, filter) {
  let filteredProducts = [...state.__Products];
  if (filter.byNames) {
    filteredProducts = filteredProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }
  if (filter.lowToHigh) {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (filter.highToLow) {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }
  return filteredProducts;
}

export function searchProduct(state, action) {
  let searchItem = [...state.__Products];
  searchItem = searchItem.filter((product) =>
    product.title.toLowerCase().includes(action.payload.toLowerCase())
  );
  if (searchItem.length > 0) {
    return searchItem;
  } else if (searchItem === undefined || searchItem.length === 0) {
    return state.__Products;
  }
}
