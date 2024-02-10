import { CREATE_USER,GET_USER } from './client/endpoints';
import { Axios } from './client/index';

export const addUser = (user) => {
  return Axios.post(CREATE_USER,user);
};
export const getSingleUser = (id) => {
  return Axios.get(`${GET_USER}/${id}`);
};