import express from "express";
import * as blogsData from '../controllers/blogs-controller.js';

const router = express.Router();

//route to get all blogs and post a new blog
router.route('/blogsData')
    .get(blogsData.getBlogs)
    .post(blogsData.addBlogs)

export default router