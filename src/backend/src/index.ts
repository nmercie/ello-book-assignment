import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

const startServer = async () => {
  const app = express() as any;
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(), // Adds GraphQL Playground for testing queries
    ],
  });

  await server.start();
  server.applyMiddleware({ app });

  const port = process.env.PORT || 4000;
  app.listen(port, () =>
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
};

startServer().catch(err => {
  console.error('Error starting server:', err);
});
