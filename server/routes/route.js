import express from 'express';

//defining routes for different functions.

import {addUser,getUsers,getUser,editUser,deleteUser} from '../controller/user-controller.js'
const router=express.Router();

router.post('/add',addUser);
router.get('/all',getUsers);
router.get('/:id',getUser);
router.post('/:id',editUser);
router.delete('/:id',deleteUser);


export default router;