const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverPhotoURL: '/assets/gatsby.jpg',
    readingLevel: 'Medium',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverPhotoURL: '/assets/mockingbird.jpg',
    readingLevel: 'Easy',
  },
  {
    title: '1984',
    author: 'George Orwell',
    coverPhotoURL: '/assets/1984.jpg',
    readingLevel: 'Hard',
  },
];

export const resolvers = {
  Query: {
    books: () => books,
  },
};