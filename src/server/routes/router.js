import * as PostCtrl from '../controllers/controller.js';
import express from 'express'; //refers to Express the middleware helper for Node.js

export const postRouter = express.Router();

//postRouter.post('/home', controller.create);
postRouter.post('/post', PostCtrl.createPost)
postRouter.get('/posts', PostCtrl.getPosts)

//export default postRouter; 