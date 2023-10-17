import express from "express";
import {getProfile, updatePofile, deletePofile, followUser, unFollowUser,} from '../controllers/profileController.js';

const profileRoutes = express.Router();
 
profileRoutes.get('/', getProfile);
profileRoutes.put('/:id', updatePofile);
profileRoutes.delete('/:id', deletePofile);
profileRoutes.put('/:id/follow', followUser);
profileRoutes.put('/:id/unfollow', unFollowUser);


export default profileRoutes;