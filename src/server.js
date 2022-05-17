import {ApolloServer} from 'apollo-server';
import connectToDatabase from './database'

function startServer({ typeDefs, resolvers }) {
    connectToDatabase()

    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`));
}

export default startServer;