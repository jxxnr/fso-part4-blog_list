const Blog = require('../models/blog')

const initialBlogs = [
  {
    _id: '616430e7d39ed27172bd13c6',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '6164312bd39ed27172bd13c9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  },
  {
    _id: '61643227d39ed27172bd13cc',
    title: 'The Founding of the Agile Alliance',
    author: 'Robert C. Martin',
    url: 'https://sites.google.com/site/unclebobconsultingllc/the-founding-of-the-agile-alliance',
    likes: 7,
    __v: 0
  },
  {
    _id: '61643266d39ed27172bd13ce',
    title: 'REPL Driven Design',
    author: 'Robert C. Martin',
    url: 'https://blog.cleancoder.com/uncle-bob/2020/05/27/ReplDrivenDesign.html',
    likes: 3,
    __v: 0
  },
  {
    _id: '6164341cd39ed27172bd13d1',
    title: 'Agile is not now, nor was it ever, Waterfall.',
    author: 'Robert C. Martin',
    url: 'https://blog.cleancoder.com/uncle-bob/2015/10/16/Agile-And-Waterfall.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '616435bfd39ed27172bd13d3',
    title: 'ON EME IN HTML5',
    author: 'Tim Berners-Lee',
    url: 'https://www.w3.org/blog/2017/02/on-eme-in-html5/',
    likes: 9,
    __v: 0
  },
  {
    _id: '6164457fd39ed27172bd13d5',
    title: 'Don’t Let Criminals Hold Your Organisation To Ransom',
    author: 'Mike Loukides',
    url: 'https://informationsecuritybuzz.com/articles/dont-let-criminals-hold-your-organisation-to-ransom/',
    likes: 6,
    __v: 0
  }
]

const nonExistingId = async () => {
  const blog = new Blog({
    title: 'willremovethissoon',
    author: 'test author',
    url: 'no url',
    likes: 1
  })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb
}