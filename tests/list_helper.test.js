const listHelper = require('../utils/list_helper')
const testHelper = require('./test_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

// Will export the blog lists in the future from a different file...
// ...to prevent repitition in declaring the same blog lists insibe different decribe functions
describe('total likes', () => {
  test('of empty list is zero', () => {
    const result = listHelper.totalLikes([])
    expect(result).toBe(0)
  })

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes([testHelper.initialBlogs[0]])
    expect(result).toBe(5)
  })

  test('of a bigger list is calculated right', () => {
    const result = listHelper.totalLikes(testHelper.initialBlogs)
    expect(result).toBe(47)
  })
})

describe('favorite blog', () => {
  test('of empty list', () => {
    const result = listHelper.favoriteBlog([])
    expect(result).toEqual({})
  })

  test('when list has only one blog, is the blog itself', () => {
    const result = listHelper.favoriteBlog([testHelper.initialBlogs[0]])
    expect(result).toEqual({
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      likes: 5,
    })
  })

  test('of a list with many blogs is the blog with max likes', () => {
    const result = listHelper.favoriteBlog(testHelper.initialBlogs)
    expect(result).toEqual({
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12,
    })
  })
})

describe('most blogs', () => {
  test('of an empty list', () => {
    const result = listHelper.mostBlogs([])
    expect(result).toEqual({})
  })

  test('when list has only one blog is 1', () => {
    const result = listHelper.mostBlogs([testHelper.initialBlogs[0]])
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      blogs: 1
    })
  })

  test('of a list with many blogs is author with most blogs', () => {
    const result = listHelper.mostBlogs(testHelper.initialBlogs)
    expect(result).toEqual({
      author: 'Robert C. Martin',
      blogs: 3
    })
  })
})

describe('most likes', () => {
  test('of an empty list', () => {
    const result = listHelper.mostLikes([])
    expect(result).toEqual({})
  })

  test('when list has only one blog is the blog itself', () => {
    const result = listHelper.mostLikes([testHelper.initialBlogs[0]])
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 5
    })
  })

  test('of a list with many blogs is the blog with the most likes', () => {
    const result = listHelper.mostLikes(testHelper.initialBlogs)
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 17
    })
  })
})