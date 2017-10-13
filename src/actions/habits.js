import axios from 'axios';

export const nameInput = (name) => {
  return {
    type: 'NAME_INPUT',
    payload: name
  };
};

export const timeInput = (time) => {
  return {
    type: 'TIME_INPUT',
    payload: time
  };
};

export const editNameInput = (name) => {
  return {
    type: 'EDIT_NAME_INPUT',
    payload: name
  };
};

export const editTimeInput = (time) => {
  return {
    type: 'EDIT_TIME_INPUT',
    payload: time
  };
};

export const getHabits = () => {
  return {
    type: 'GET_HABITS',
    payload: axios.get('http://localhost:3000/habits')
  };
};

export const newHabit = (data) => {
  return {
    type: 'NEW_HABIT',
    payload: axios.post('http://localhost:3000/habits', data)
  };
};

export const editHabit = (id, data) => {
  return {
    type: 'EDIT_HABIT',
    payload: axios.patch(`http://localhost:3000/habits/${id}`, data)
  };
};
