import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, fetchItems } from '../../state/redux/actions';

function ItemListRedux() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const itemCount = items.length;

  return (
    <div>
      <button onClick={() => dispatch(addItem('New Item'))}>Add Item</button>
      <button onClick={() => dispatch(fetchItems())}>Fetch Items</button>
      <p>Total Items: {itemCount}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.title || item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListRedux;
