import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

export const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export const create = (nameObject) => {
  const request = axios.post(baseUrl, nameObject);
  return request.then((response) => response.data);
};

export const deletePhone = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};
