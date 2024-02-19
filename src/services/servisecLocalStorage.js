export const getFromLocalStorage = (key, defaultValue = []) => {
  let storage = localStorage.getItem(key);
  storage = storage ? JSON.parse(storage) : defaultValue;

  return storage;
};
