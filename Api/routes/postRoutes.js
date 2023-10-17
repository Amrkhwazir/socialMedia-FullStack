import express from "express";
import { userPost, updatePost, deletePost, likePost, getPost,  timelinePosts, usersAllPosts} from "../controllers/postController.js";

const postRoutes = express.Router();
 
postRoutes.post('/', userPost);
postRoutes.put('/:id', updatePost);
postRoutes.delete('/:id', deletePost);
postRoutes.put('/:id/like', likePost);
postRoutes.get('/:id', getPost);
postRoutes.get('/timeline/:userId', timelinePosts);
postRoutes.get('/profile/:username', usersAllPosts);

export default postRoutes;