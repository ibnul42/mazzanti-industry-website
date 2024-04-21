const asyncHandler = require('express-async-handler')
const Blog = require('../models/blogModal')

const getAllBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find()
    res.status(200).json(blogs.reverse())
})

const getSingleBlog = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(400)
        throw new Error('Blog not found')
    }
    const blog = await Blog.findById(id)
    if (!blog) {
        res.status(400)
        throw new Error('Blog not found')
    }

    res.status(200).json(blog)
})

const createBlog = asyncHandler(async (req, res) => {
    const { title, source, description } = req.body

    // check if all fields are inputed
    if (!title || !source || !description) {
        res.status(404)
        throw new Error('Please enter all fields')
    }

    // create a new Blog
    const blog = await Blog.create({
        title,
        description,
        source
    })

    if (blog) {
        res.status(201)
        res.json({
            message: 'Blog created successfully'
        })
    } else {
        res.status(404)
        throw new Error('Invalid user data')
    }
})

const editBlog = asyncHandler(async (req, res) => {
    const { title, source, description } = req.body
    const { id } = req.params

    if (id.length !== 24) {
        res.status(404)
        throw new Error('Blog not found')
    }

    const blogExists = await Blog.findById(id)

    if (!blogExists) {
        res.status(404).json({ message: 'blog not found' })
    }

    const updatedblog = await Blog.findByIdAndUpdate(id, {
        title, source, description
    })

    if (!updatedblog) {
        res.status(404).json({ message: 'Failed to update the blog' })
    }


    res.status(200).json({ message: 'blog updated successfully!' })
})

const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(200).json({ message: 'Blog deleted successfully' })
    }

    const blogExist = await Blog.findById(id)

    if (!blogExist) {
        res.status(200).json({ message: 'Blog deleted successfully' })
    }

    try {
        await Blog.findByIdAndDelete(id)
        res.status(200).json({ message: 'Blog deleted successfully' })
    } catch (error) {
        res.status(404).json({ msg: 'Error occured while deleting blog' })
    }
})

module.exports = {
    getAllBlogs,
    getSingleBlog,
    createBlog,
    editBlog,
    deleteBlog
}