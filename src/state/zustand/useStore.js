import { create } from 'zustand';

const useStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  fetchItems: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    set({ items: data });
  },
  itemCount: (state) => state.items.length,
}));

export default useStore;
