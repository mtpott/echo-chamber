const path = require('path');
const express = require('express');
//import apolloServer
const { ApolloServer } = require('apollo-server-express');
//middleware-->establish at a later date :)

//IMPORT TYPEDEFS AND RESOLVERS ONCE ESTABLISHED
const { typeDefs, resolvers } = require('./schemas');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001; 

//ONCE TYPEDEFS AND RESOLVERS ARE CREATED, PASS IN AND CREATE NEW APOLLO SERVER
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();

    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server now running on port ${PORT} :)`);
            console.log(`use graphql at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
}

startApolloServer(typeDefs, resolvers);