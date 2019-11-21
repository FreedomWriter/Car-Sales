export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADD_ITEM = "ADD_ITEM";

export const DELETE_FEATURE = "DELETE_FEATURE";

export const removeItem = item => {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
};

export const addItem = item => {
  console.log(`actions: index.js: addItem: item: `, item);
  return {
    type: ADD_ITEM,
    payload: item
  };
};
