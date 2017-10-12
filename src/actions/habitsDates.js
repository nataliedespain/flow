import axios from 'axios';

export const getDates = (uid) => {
  return {
    type: 'GET_DATES',
    payload: axios.get(`http://localhost:3000/habits_dates/${uid}`)
  };
};

export const addDate = (data) => {
  return {
    type: 'ADD_DATE',
    payload: axios.post('http://localhost:3000/habits_dates/', data)
  };
};
