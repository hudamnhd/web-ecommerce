export const handleAddCart = (cartItem, setCartItem, item) => {
  const existingItem = cartItem.find((itemCard) => itemCard.id === item.id);
  if (existingItem) {
    const updatedItems = cartItem.map((itemCard) =>
      itemCard.id === item.id
        ? { ...itemCard, count: itemCard.count + 1 }
        : itemCard
    );
    setCartItem(updatedItems);
  } else {
    const newItem = { ...item, count: 1 };
    setCartItem([...cartItem, newItem]);
  }
};

export const handleDeleteItem = (id, cartItem, setCartItem) => {
  const filterData = cartItem.filter((item) => item.id !== id);
  setCartItem(filterData);
};

export const handleReductionItem = (product, cartItem, setCartItem) => {
  if (product.count === 1) {
    return handleDeleteItem(product.id, cartItem, setCartItem);
  }
  const updateProduct = {
    ...product,
    count: product.count - 1,
  };
  const findIndexProduct = cartItem.findIndex(
    (index) => index.id === product.id
  );
  const updateProducts = [...cartItem];
  updateProducts[findIndexProduct] = updateProduct;
  setCartItem(updateProducts);
};

export const handleAdditionItem = (product, cartItem, setCartItem) => {
  const updateProduct = {
    ...product,
    count: product.count + 1,
  };
  const findIndexProduct = cartItem.findIndex(
    (index) => index.id === product.id
  );
  const updateProducts = [...cartItem];
  updateProducts[findIndexProduct] = updateProduct;
  setCartItem(updateProducts);
};

export const cartTotal = (cartItem) => {
  return cartItem.reduce((total, product) => {
    const productTotal = product.priceIDR * product.count;
    return total + productTotal;
  }, 0);
};
