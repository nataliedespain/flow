const initialState = {
  toggleNew: false,
  toggleEdit: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NEW_HABIT':
      return { ...state, toggleNew: !state.toggleNew };
    case 'TOGGLE_EDIT_HABIT':
      return { ...state, toggleEdit: !state.toggleEdit };
    default:
      return state;
  }
};
