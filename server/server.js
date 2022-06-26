const path = require('path');
const express = require('express');
//import apolloServer
const { ApolloServer } = require('apollo-server-express');
//middleware-->establish at a later date :)

//IMPORT TYPEDEFS AND RESOLVERS ONCE ESTABLISHED

const db = require('./config/connection');

const PORT = process.env.PORT || 3001; 

//ONCE TYPEDEFS AND RESOLVERS ARE CREATED, PASS IN AND CREATE NEW APOLLO SERVER

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());