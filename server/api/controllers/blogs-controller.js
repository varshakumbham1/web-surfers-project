import { httpUtils } from './../utils/index.js';
import { blogData } from './../services/index.js';

//controller method to get all the blogs from db
export const getBlogs = async (request, response) => {
    try{
        const blogs = await blogData.getBlogs();
        httpUtils.setSuccessResponse(blogs, response);
    } catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}

//controller method to add a blog to db
export const addBlogs = async (request, response) => {
    try {
        const payload = request.body;
        const blogItem = await blogData.addBlogs(payload);
        httpUtils.setSuccessResponse(blogItem, response);
    }
    catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}