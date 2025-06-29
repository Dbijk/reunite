
import { mockItems } from "./mockData";

export interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "lost" | "found";
  location: string;
  date: string;
  image?: string;
  urgent?: boolean;
  contactInfo: string;
}

// Create a mutable copy of mock items
let items: Item[] = [...mockItems];

export const getItems = (): Item[] => {
  return [...items];
};

export const addItem = (item: Omit<Item, "id">): Item => {
  const newItem: Item = {
    ...item,
    id: (items.length + 1).toString(),
  };
  items.push(newItem);
  return newItem;
};

export const updateItem = (id: string, updates: Partial<Item>): Item | null => {
  const index = items.findIndex(item => item.id === id);
  if (index === -1) return null;
  
  items[index] = { ...items[index], ...updates };
  return items[index];
};

export const deleteItem = (id: string): boolean => {
  const index = items.findIndex(item => item.id === id);
  if (index === -1) return false;
  
  items.splice(index, 1);
  return true;
};
