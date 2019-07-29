const express = require('express');
const bodyParser = require('body-parser');

// init the express app
const game = require('./routes/game.route');
const app = express();

app.use('/games', game);

let port = 3004;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

