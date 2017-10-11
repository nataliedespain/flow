import axios from 'axios';

export const getHabits = () => {
  return {
    type: 'GET_HABITS',
    payload: axios.get('http://localhost:3000/habits')
  };
};

// export const getHabit = (id) => {
//   return {
//     type: 'GET_HABIT',
//     payload: axios.get(`http://localhost:3000/habits/${id}`)
//   };
// };
