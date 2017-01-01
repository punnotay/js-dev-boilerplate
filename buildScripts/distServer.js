import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

//import {middleware} from 'webpack-dev-middleware';

/* eslint-disable no-console */
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tammy@gmail.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Lee", "email": "tina@yahoo.com"}
  ]);
});


app.listen(port, function(err){
  if (err){
    console.log(err);
  }else {
    open('http://localhost:' + port);
  }
});
