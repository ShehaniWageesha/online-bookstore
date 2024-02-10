import { BOOK,CREATE_BOOK,DELETE_BOOK,GET_BOOK,UPDATE_BOOK } from './client/endpoints';
import { Axios } from './client/index';

export const getBooks = () => {
  return Axios.get(BOOK);
};
export const deleteBook = (id) => {
  return Axios.delete(`${DELETE_BOOK}/${id}`);
};
export const addBooks = (book) => {
  return Axios.post(CREATE_BOOK,book);
};
export const getSingleBook = (id) => {
  return Axios.get(`${GET_BOOK}/${id}`);
};
export const updateBook = (id,book) => {
  return Axios.post(`${UPDATE_BOOK}/${id}`,book);
};
