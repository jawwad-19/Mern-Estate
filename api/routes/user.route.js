import express from 'express';
<<<<<<< HEAD
import { deleteUser, test, updateUser,  getUserListings, getUser} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUser)

=======
import { test } from '../controllers/user.controller.js';
const router=express.Router();
router.get('/test', test);
>>>>>>> 9fd1453f029e3449823ac9ad09b238362e52676e
export default router;