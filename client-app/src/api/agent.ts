import axios, { AxiosResponse } from 'axios';
import IUsers from '../models/Users';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, user: {}) => axios.post(url, user)
};

const Users = {
  list: () => requests.get('/user'),
  create: (user: IUsers) => requests.post('/user', user)
};
export default Users;
