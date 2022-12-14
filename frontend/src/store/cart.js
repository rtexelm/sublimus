import csrfFetch from "./csrf";

const RECEIVE_ITEMS = "items/receiveItems";
const RECEIVE_ITEM = "items/receiveItem";
const REMOVE_ITEM = "items/removeItem";

export const receiveItems = (items) => ({
  type: RECEIVE_ITEMS,
  payload: items,
});

export const receiveItem = (item) => ({
  type: RECEIVE_ITEM,
  payload: item,
});

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  payload: itemId,
});

export const getItems = (state) => Object.values(state.items);

export const getItem = (itemId) => (state) =>
  state.items[itemId] ? state.items[itemId] : {};

export const fetchItems = () => async (dispatch) => {
  const res = await csrfFetch(`/api/cart_items/`);
  const data = await res.json();

  dispatch(receiveItems(data));
  return res;
};

// export const fetchEvent = (itemId) => async (dispatch) => {
//   const res = await csrfFetch(`/api/cart_items/${itemId}`);
//   const data = await res.json();

//   dispatch(receiveItem(data));
// };

export const createItem = (item) => async (dispatch) => {
  const res = await csrfFetch(`/api/cart_items/`, {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  dispatch(receiveItem(data));
};

export const updateItem = (item) => async (dispatch) => {
  const res = await csrfFetch(`/api/cart_items/${item.id}`, {
    method: "PATCH",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  dispatch(receiveItem(data));
};

export const deleteEvent = (itemId) => async (dispatch) => {
  const res = await csrfFetch(`/api/cart_items/${itemId}`, {
    method: "DELETE",
  });

  dispatch(removeItem(itemId));
};

function filmsReducer(state = {}, action) {
  const newState = { ...state };

  switch (action.type) {
    case RECEIVE_ITEMS:
      return { ...newState, ...action.payload };
    case RECEIVE_ITEM:
      const item = action.payload;
      return { ...newState, [item.id]: item };
    case REMOVE_ITEM:
      const itemId = action.payload;
      delete newState[itemId];
      return newState;
    default:
      return state;
  }
}
