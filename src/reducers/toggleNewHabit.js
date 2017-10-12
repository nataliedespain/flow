export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_NEW_HABIT':
      return !state;
    default:
      return state;
  }
};
