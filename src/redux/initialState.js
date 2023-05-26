const initialState = {
  posts: [
    {
        id: '1',
        title: 'Article title',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date ('02-02-2022'),
        author: 'John Doe',
        category: 'news'
    },
    {
        id: '2',
        title: 'Article title II',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date ('02-02-2022'),
        author: 'John Doe',
        category: 'sport'
    },

    {
        id: '3',
        title: 'Article title III',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date ('02-02-2022'),
        author: 'John Doe',
        category: 'movies'
    },
    {
        id: '4',
        title: 'Article title IV',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date ('02-02-2022'),
        author: 'John Doe',
        category: 'news'
    },

  ],
  categories: [
    'news', 'movies', 'sport'
  ],

};

export default initialState;