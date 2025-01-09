//inicializa un server de express
import { DataStore } from 'aws-amplify/datastore';
//importa modelo Post
import { Post } from '../models/index.js';
//const { Post } = require('../models/index');
import express from 'express';
const app = express();

//agrega un hola mundo
app.get('/', async (req, res) => {
    try {
        const post = await DataStore.save(
          new Post({
            title: 'My First Post'
          })
        );
        console.log('Post saved successfully!', post);
      } catch (error) {
        console.log('Error saving post', error);
      }
    res.send('Hola Mundo');
    }
);

//abre el puerto 3000
app.listen(3000, () => {
    console.log('Server on port 3000');
});

//exporta el server
module.exports = app;