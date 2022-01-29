import axios from 'axios';

const whiteWordCellsAPI = axios.create({
  baseURL: 'https://whitewordcells.herokuapp.com/api/v1/',
  // baseURL: 'http://localhost:3001/api/v1/',
  withCredentials: true,
});

export default whiteWordCellsAPI;
