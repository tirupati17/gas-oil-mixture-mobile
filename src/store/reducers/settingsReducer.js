const initialState = {
  autoFocusInput: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTO_FOCUS_INPUT':
      return {
        ...state,
        autoFocusInput: action.payload,
      };
    default:
      return state;
  }
};
