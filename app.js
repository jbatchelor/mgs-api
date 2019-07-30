const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// init the express app
const game = require('./routes/game.route');
const app = express();

// Mongoose config
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://muthacluck:r6g7DA3aZdd9@flustercluck1-1yqpg.mongodb.net/mygamelib?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URL || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var whitelist = ['http://localhost:3000'];
var corsOpts = {
    origin: function (origin, callback) {
        if(whitelist.indexOf(origin) != -1){
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.use(cors(corsOpts));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/games', game);

let port = 3004;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

