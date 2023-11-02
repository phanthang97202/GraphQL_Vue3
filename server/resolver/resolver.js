const resolvers = {
  Query: {
    books: async (_, __, context) => await context.storeData.getAllBooks(),
    book: async (_, args, context) => {
      return await context.storeData.getBookById(args);
    },
    authors: async (_, __, context) => await context.storeData.getAllAuthors(),
    author: async (_, args, context) => {
      return await context.storeData.getAuthorById(args);
    },
  },
  // query Book có trường là author thì tự động map lại với nhau
  Book: {
    author: (parent, _, context) => {
      // parent chính là query trả về
      return context.storeData.getAuthorOfBook(parent);
    },
  },
  // query Author có trường là books thì tự động map lại với nhau
  Author: {
    books: (parent, _, context) => {
      // const getBooks = books.filter((b, _, arr) => {
      //   if (parent.book.includes(b.id)) return b;
      // });
      return context.storeData.getBooksOfAuthor(parent);
    },
  },

  // MUTATION
  Mutation: {
    createAuthor: async (_, args, context) =>
      await context.storeData.createAuthor(args),
    createBook: async (_, args, context) =>
      await context.storeData.createBook(args),
  },
};

module.exports = resolvers;
