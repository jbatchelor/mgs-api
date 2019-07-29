const express = require('express');
const bodyParser = require('body-parser');

// init the express app
const game = require('./routes/game.route');
const app = express();

// Mongoose config
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://muthacluck:r6g7DA3aZdd9@flustercluck1-1yqpg.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URL || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connectiondb.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/games', game);

let port = 3004;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

