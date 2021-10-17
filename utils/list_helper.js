const dummy = (blogs) => {
  // Log blogs just to get rid of the 'defined but never used error'
  console.log(blogs)
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 0)
    return 0
  if (blogs.length === 1)
    return blogs[0].likes

  const reducer = (sum, blog) => {
    return sum + blog.likes
  }


  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0)
    return {}

  let favorite = {}

  if (blogs.length === 1) {
    favorite = blogs[0]
  } else {
    const likeCount = blogs.map(blog => blog.likes)
    const maxLikes = Math.max(...likeCount)
    favorite = blogs.find(blog => blog.likes === maxLikes)
  }

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  }
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return {}
  }
  const blogAuthors = []

  blogs.forEach((blog) => {
    const authorIndex = blogAuthors.findIndex(blogAuthor => blogAuthor.author === blog.author)

    if (authorIndex === -1) {
      const author = {
        author: blog.author,
        blogs: 1
      }
      blogAuthors.push(author)

    } else {
      const updatedAuthorData = {
        ...blogAuthors[authorIndex],
        blogs: blogAuthors[authorIndex].blogs + 1
      }
      blogAuthors.splice(authorIndex, 1, updatedAuthorData)
    }
  })

  const blogCount = blogAuthors.map(blog => blog.blogs)
  const indexOfMax = blogCount.findIndex(count => count === Math.max(...blogCount))
  return blogAuthors[indexOfMax]
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return {}
  }

  const blogAuthors = []

  blogs.forEach((blog) => {
    const authorIndex = blogAuthors.findIndex(blogAuthor => blogAuthor.author === blog.author)

    if (authorIndex === -1) {
      const author = {
        author: blog.author,
        likes: blog.likes
      }
      blogAuthors.push(author)

    } else {
      const updatedAuthorData = {
        ...blogAuthors[authorIndex],
        likes: blogAuthors[authorIndex].likes + blog.likes
      }
      blogAuthors.splice(authorIndex, 1, updatedAuthorData)
    }
  })

  const likeCount = blogAuthors.map(blog => blog.likes)
  const indexOfMax = likeCount.findIndex(count => count === Math.max(...likeCount))

  return blogAuthors[indexOfMax]
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}