import express from "express";
import {getProfile, updatePofile, deletePofile, followUser, unFollowUser, getFriends,} from '../controllers/profileController.js';

const profileRoutes = express.Router();
 
profileRoutes.get('/', getProfile);
profileRoutes.put('/:id', updatePofile);
profileRoutes.delete('/:id', deletePofile);
profileRoutes.get('/friends/:userId', getFriends);
profileRoutes.put('/:id/follow', followUser);
profileRoutes.put('/:id/unfollow', unFollowUser);


export default profileRoutes;