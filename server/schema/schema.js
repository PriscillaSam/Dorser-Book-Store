import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';

// add some dummy data here
const data = [
  {
    category: 'Music',
    content: 'A test music tutorial',
    id: '1',
    title: 'Music tutorial',
  },
  {
    category: 'Data science',
    content: 'A tutorial on Data science',
    id: '2',
    title: 'Mining knowledge bits',
  },
];

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  fields: () => ({
    category: { type: GraphQLString },
    content: { type: GraphQLString },
    id: { type: GraphQLString },
    title: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    article: {
      type: ArticleType,
      args: { id: { type: GraphQLString } },
      resolve(_parent, args) {
        // code to get data from db
        // use test data for now
        return data.find(book => book.id === args.id);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
