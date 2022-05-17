export const addItem = (items, addedItem) => {
  //Will return the 1st item it will find with the same id
  const existingItem = items.find((item) => item.id === addedItem.id);

  if (existingItem) {
    return items.map((item) =>
      item.id === addedItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...items, { ...addedItem, quantity: 1 }];
};

export const removeItem = (items, removedItem) => {
  //Will return the 1st item it will find with the same id
  const existingItem = items.find((item) => item.id === removedItem.id);

  if (existingItem.quantity === 1) {
    return items.filter((item) => item.id !== existingItem.id);
  }

  if (existingItem) {
    return items.map((item) =>
      item.id === removedItem.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};
