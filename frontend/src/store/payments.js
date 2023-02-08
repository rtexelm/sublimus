import csrfFetch from "./csrf";

const RECEIVE_CLIENT_SECRET = "payments/receiveClientSecret";

export const receiveClientSecret = (secret) => ({
  type: RECEIVE_CLIENT_SECRET,
  payload: secret,
});

export const getClientSecret = (state) => state.clientSecret;

export const createPayment = (customerInfo) => async (dispatch) => {
  const res = await csrfFetch(`/api/payments/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customerInfo),
  });
  const data = await res.json();

  dispatch(receiveClientSecret(data));
};

function paymentsReducer(state = {}, action) {
  const newState = { ...state };

  switch (action.type) {
    case RECEIVE_CLIENT_SECRET:
      return { ...newState, clientSecret: action.payload };
    default:
      return state;
  }
}

export default paymentsReducer;
