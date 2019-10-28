import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  people: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        people: action.people
      };
    }
    default:
      return state;
  }
};

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
