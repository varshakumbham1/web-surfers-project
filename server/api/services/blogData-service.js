import Blog from '../models/blogs.js';

//service method to get all blogs from db
export const getBlogs = async () => {
    try{
        const blogs = Blog.find({});
        return blogs;
    }catch (error) {
        throw error;
    }
}

//service method to add blog to db
export const addBlogs = (blogItem) => {
    try {
        const blog = new Blog(blogItem);
        return blog.save();
    }
    catch (error) {
        throw error;
    }
}