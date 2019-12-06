const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3001);
app.use(cors());

app.get('/', (request, response) => {
  return response.status(200).json({
    hello: 'world',
    message: 'You have gotten to the first step! Write a script with a series of fetch calls to solve this without using Postman. Connect the dots between these next clues you find...',
    clues: ['/clues/0', '/clues/1', '/clues/2', '/clues/3', '/clues/4', '/clues/5']
  });
});

app.get('/clues/:index', (request, response) => {
  const nextURL = ['almost-there', '3001/', 'host:', 'local', '://', 'http'];

  return response.status(200).json({clue: nextURL[request.params.index]});
});

app.get('/almost-there', (request, response) => {
  return response.status(200).json({hint: 'The final route will be /final/:number-of-offical-http-status-codes'})
});

app.get('/final/:num', (request, response) => {
  if (parseInt(request.params.num) === 63) {
    return response.status(200).json({message: 'Congrats, you made it!'});
  } else {
    return response.status(404).json({message: 'Hmmm...I don\'t seem to know that number.'});
  }
});

app.listen(app.get('port'), () => {
  console.log(`Find your way through the API starting at http://localhost:${app.get('port')}`);
});
