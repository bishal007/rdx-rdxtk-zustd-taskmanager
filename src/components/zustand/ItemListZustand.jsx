import React from "react";
import useStore from "../../state/zustand/useStore";

function ItemListZustand() {
  const { items, addItem, fetchItems, itemCount } = useStore((state) => ({
    items: state.items,
    addItem: state.addItem,
    fetchItems: state.fetchItems,
    itemCount: state.itemCount(state),
  }));

  return (
    <div>
      <button onClick={() => addItem("New Item")}>Add Item</button>
      <button onClick={fetchItems}>Fetch Items</button>
      <p>Total Items: {itemCount}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.title || item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListZustand;
