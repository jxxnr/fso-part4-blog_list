const dummy = (blogs) => {
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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}