import { response } from 'express';
import User from '../schema/user-schema.js';

// post api
export const addUser = async (req, res) => {
  const user = req.body;
  try {
    if (user) {
      var newUser = new User(user);
    }
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// get api
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// get single user
export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const getSingleData = await User.findById(id);
    return res.status(200).json(getSingleData);
  } catch (error) {
    return res.status(409).json(error);
  }
};

// put api
export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const getUpdatedData = await User.findByIdAndUpdate(id, req.body);
    return res.status(200).json(getUpdatedData);
  } catch (error) {
    return res.status(409).json(error);
  }
};


// delete api
export const deleteUser = async (req, res) => {
  const {id} = req.params;
  try {
    const deleteData = await User.findByIdAndDelete(id)
    return res.status(200).json(deleteData)
  } catch (error) {
    return res.status(409).json(error);
  }
}
