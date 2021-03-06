export default (state = { isFetching: true, data: [] }, action) => {
  switch (action.type) {
    case 'GET_DATES_PENDING':
      return { ...state, isFetching: true };
    case 'GET_DATES_FULFILLED':
      return { ...state, data: action.payload.data, isFetching: false };
    case 'GET_DATES_REJECTED':
      return state;
    case 'ADD_DATE_FULFILLED':
      return { ...state, data: [...state.data, ...action.payload.data] };
    default:
      return state;
  }
};
