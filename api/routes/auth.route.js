import express from 'express';
<<<<<<< HEAD
import { google, signOut, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post('/google', google);
router.get('/signout', signOut)

export default router;
=======
import { google,signup, signin } from '../controllers/auth.controller.js';
const router=express.Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.post("/google", google);

export default router; 
>>>>>>> 9fd1453f029e3449823ac9ad09b238362e52676e
