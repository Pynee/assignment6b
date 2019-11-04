const initialState = {
  coords: {}
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_COORDINATES":
      return { ...state, coords: [action.payload] };
    default:
      return state;
  }
}

export default weatherReducer;
