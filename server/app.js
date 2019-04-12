import Express from 'express';
import graphqlHTTP from 'express-graphql';
import GraphQlSchema from './schema/schema';

const app = Express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: GraphQlSchema,
    graphiql: true,
  })
);
const port = 5000;
app.listen(port, () => {
  console.log(`Priscilla's server listening in on port ${port}`);
});
