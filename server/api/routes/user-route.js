import express from "express";
import * as userController from '../controllers/user-controller.js';

const router = express.Router();

//route to get all Users and post a new User
router.route('/users')
    .post(userController.post)
    .get(userController.getUsers);

//route to login User by uuid 
router.route('/users/login/:uuid')
.post(userController.login);

//route to update User by uuid and get User by uuid
router.route('/users/:uuid')
.put(userController.updateUser)
.get(userController.getUserById);

//route to verify security answer for password update
router.route('/users/verify-security/:uuid')
.get(userController.verifySecurityAnswer);

//route to save event registered by user
router.route('/users/save-event/:uuid')
.put(userController.saveRegisteredEvent);

//route to save event bookmarked by user
router.route('/users/interested-event/:uuid')
.put(userController.saveInterestedEvent);

//route to delete event unregistered by user 
router.route('/users/unregister-event/:uuid')
.put(userController.unregisterEvent);

//route to delete event unbookmarked by user
router.route('/users/unbookmark-event/:uuid')
.put(userController.unbookmarkEvent);

export default router;    
