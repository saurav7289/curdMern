import express, {Router} from 'express';
import {addUser, getAllUsers, getSingleUser, updateUser, deleteUser} from '../controller/user-controller.js'

const router = express.Router();

// all routes are here

router.get("/", getAllUsers)
router.post('/add', addUser);
router.get("/user/update/:id", getSingleUser)
router.put("/user/update/:id", updateUser)
router.delete("/user/delete/:id", deleteUser)









export default router;
