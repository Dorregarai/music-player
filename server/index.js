const express = require('express');
const config = require('config');
const { APP_PORT } = require('./config/config');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/player');
const mongoose = require('mongoose');
const app = express();

app.use(cors({
    origin(origin, callback) {
        const even = ['http://localhost:3000', 'http://localhost:3001'].some(element => element === origin);
        callback(null, even);
    },
    preflightContinue: true,
    optionsSuccessStatus: 200,
}));
app.use(express.json());


//use config module to get the privatekey, if no private key set, end the application
if(!config.get('myprivatekey')){
    console.error('FATAL ERROR: myprivatekey is not defined.');
    process.exit(1);
}

mongoose
    .connect('mongodb://localhost/nodejsauth', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(('Could not connect to MongoDB...')));

app.use('/api/users', userRoute);

const port = process.env.PORT || APP_PORT;

app.listen(port, () => console.log(`App listening on port ${port}...`));

/* RUN MONGOD: "c:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\data\db" */