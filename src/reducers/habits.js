export default (state = {isFetching: true, data: []}, action) => {
  switch (action.type) {
    case 'GET_HABITS_PENDING':
      return {...state, isFetching: true};
    case 'GET_HABITS_FULFILLED':
      return {...state, data: action.payload.data, isFetching: false};
    case 'GET_HABITS_REJECTED':
      return state;
    default:
      return state;
  }
};
