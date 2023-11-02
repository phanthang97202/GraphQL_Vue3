const Book = require("../models/Book");
const Author = require("../models/Author");

const storeData = {
  getAllBooks: async () => {
    const data = await Book.find();
    return data;
  },
  getAllAuthors: async () => {
    const data = await Author.find();
    return data;
  },
  createAuthor: async (args) => {
    const newAuthor = await Author.create(args);
    return newAuthor;
  },
  createBook: async (args) => {
    const newBook = new Book(args);
    return await newBook.save();
  },
  getBookById: async function (args) {
    //  CÁCH 2_ VIP :
    const data = await Book.findById(args.id);
    return data;
  },
  getAuthorById: async function (args) {
    //  CÁCH 1_ CỦ CHUỐI :
    const authors = await this.getAllAuthors();
    const [data] = authors.filter((author) => author.id == args.id);
    return data;
  },
  // Query lồng
  getAuthorOfBook: async function (parent) {
    const authors = await this.getAllAuthors();
    const data = authors.find((author) => author.id == parent.authorId);
    return data;
  },
  // Query lồng
  getBooksOfAuthor: async function (parent) {
    const books = await this.getAllBooks();
    const data = books.filter((b) => {
      return b.authorId == parent.id;
    });
    return data;
  },
};
module.exports = storeData;
