const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

// Will export the blog lists in the future from a different file...
// ...to prevent repitition in declaring the same blog lists insibe different decribe functions
describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  const listWithManyBlogs = [
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

  test('of empty list is zero', () => {
    const result = listHelper.totalLikes([])
    expect(result).toBe(0)
  })

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('of a bigger list is calculated right', () => {
    const result = listHelper.totalLikes(listWithManyBlogs)
    expect(result).toBe(47)
  })
})

describe('favorite blog', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  const listWithManyBlogs = [
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

  test('of empty list', () => {
    const result = listHelper.favoriteBlog([])
    expect(result).toEqual({})
  })

  test('when list has only one blog, is the blog itself', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog)
    expect(result).toEqual({
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      likes: 5,
    })
  })

  test('of a list with many blogs is the blog with max likes', () => {
    const result = listHelper.favoriteBlog(listWithManyBlogs)
    expect(result).toEqual({
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12,
    })
  })
})