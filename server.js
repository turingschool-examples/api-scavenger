const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3001);
app.use(cors());

app.get('/', (request, response) => {
  return response.status(200).json({
    hello: 'world',
    message: `You have gotten to the first step! Connect the dots between these next clues you find...
      You can use Postman to help guide you, but you must strive to write a series of fetch calls to solve this.`,
    clues: ['/clues/0', '/clues/1', '/clues/2', '/clues/3', '/clues/4']
  });
});

app.get('/clues/:index', (request, response) => {
  const nextURL = ['final', 'host/', 'local', '://', 'http'];

  return response.status(200).json({clue: nextURL[request.params.index]});
});

app.get('/final', (request, response) => {
  return response.status(200).json({message: 'Congrats, you made it!'});
});

app.listen(app.get('port'), () => {
  console.log(`Find your way through the API starting at http://localhost:${app.get('port')}`);
});
