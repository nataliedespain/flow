const initialState =
{
  name: '',
  time: 1,
  isFetching: true,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NAME_INPUT':
      return { ...state, name: action.payload };
    case 'TIME_INPUT':
      return { ...state, time: action.payload }
    case 'GET_HABITS_PENDING':
      return { ...state, isFetching: true };
    case 'GET_HABITS_FULFILLED':
      return { ...state, data: action.payload.data, isFetching: false };
    case 'GET_HABITS_REJECTED':
      return state;
    case 'NEW_HABIT_FULFILLED':
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};
