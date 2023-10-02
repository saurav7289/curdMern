import axios from 'axios';

const URL = '';

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}`);
  } catch (error) {
    console.log(`Error while calling get API`, error);
  }
};

export const addUser = async (data) => {
  try {
    await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log('Error while calling add user', error);
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${URL}/user/delete/${id}`);
  } catch (error) {
    console.log('Error while calling add user', error);
  }
};


export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/user/update/${id}`);
  } catch (error) {
    console.log(`Error while calling get API`, error);
  }

};

export const updateUser = async (id,data) => {
  try {
    await axios.put(`${URL}/user/update/${id}`, data);
  } catch (error) {
    console.log(`Error while calling get API`, error);
  }

};
