const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require ('../app')
const api = supertest(app)
const Blog = require('../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})

  for (let blog of helper.initialBlogs) {
    let blogObject = new Blog(blog)
    await blogObject.save()
  }
}, 100000)

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
}, 100000)

test('blog post unique identifier property is named id', async () => {
  const response = await api.get('/api/blogs')
  const oneReturnedBlog = response.body[0]

  expect(oneReturnedBlog.id).toBeDefined()
}, 100000)

test('a new blog post is created when an http post request is made', async () => {
  const newBlog = {
    title: 'New Blog',
    author: 'Random Author',
    url: 'no url',
    likes: 1
  }

  await api.post('/api/blogs')
    .send(newBlog)
    .expect(200)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
  const blogTitlesAtEnd = blogsAtEnd.map(blog => blog.title)

  expect(blogTitlesAtEnd).toContain('New Blog')
}, 100000)

test('default likes for blog posts missing likes property is 0', async () => {
  const newBlog = {
    title: 'Blog With Missing LIkes Property',
    author: 'Random Author',
    url: 'no url'
  }

  const postedBlog = await api.post('/api/blogs')
    .send(newBlog)
    .expect(200)

  expect(postedBlog.body.likes).toBe(0)
}, 10000)

test('creating new blogs with missing title and url results to 400 bad request status',  async () => {
  const newBlog = {
    author: 'Random Author',
    likes: 5
  }
  await api.post('/api/blogs')
    .send(newBlog)
    .expect(400)
}, 100000)

afterAll(() => {
  mongoose.connection.close()
})