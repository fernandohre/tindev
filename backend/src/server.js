const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://tindevdatabase:tindevdatabase@tindevdatabase-3tlbw.mongodb.net/tindevdatabase?retryWrites=true&w=majority',
                { 
                    useNewUrlParser: true 
                }
);

server.use(express.json());
server.use(routes);

server.listen(3333);