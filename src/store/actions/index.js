import { RENDER_NEW_ITEMS, DELETE_ITEM, EDIT_ITEM } from "../reducers";

export const returnNewItem = (value) => ({
  type: RENDER_NEW_ITEMS,
  payload: value,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const editItem = (value) => ({
  type: EDIT_ITEM,
  payload: value,
});
