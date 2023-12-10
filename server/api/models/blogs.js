import mongoose from 'mongoose';

//schema for Blogs
const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: "Blog Title is required",

    },

    description: {
        type: String,
        required: "Description is required",
    },

    author: {
        type: String,
        required: "Author is required",
    },

    imgUrl: {
        type: String,
        required: "Image is required",
        default: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
    }
})

const model = mongoose.model('blogMasterData', blogSchema);
export default model;