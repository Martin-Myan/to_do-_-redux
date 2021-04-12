export const RENDER_NEW_ITEMS = "RENDER_NEW_ITEMS";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";

const initialState = {
  defaultArray: [],
};

export const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case RENDER_NEW_ITEMS:
      return {
        defaultArray: [
          ...state.defaultArray,
          { value: payload.value, id: payload.id },
        ],
      };

    case EDIT_ITEM:
      return {
        ...state,
        defaultArray: state.defaultArray.map((item) => {
          if (item.id === payload.id) {
            return {
              ...payload,
            };
          }
          return item;
        }),
      };

    case DELETE_ITEM:
      return {
        defaultArray: state.defaultArray.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};
