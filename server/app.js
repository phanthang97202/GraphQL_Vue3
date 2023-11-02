const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

// load schema and resolve
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");
const cors = require("cors");

// load db methods
const storeData = require("./data/db");

// kết nối với db
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://phanthang97202:phanthang97202@graphql.eueq0c4.mongodb.net/GraphQL?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("👏 Database successfully!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();
const start = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context dùng cho toàn bộ Apollo Server trong app
    context: () => {
      return { storeData };
    },
  });
  await server.start();
  const app = express();
  app.use(cors());
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready ✔ http://localhost:4000${server.graphqlPath}`);
  });
};

start();
