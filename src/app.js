const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const cors = require('cors');

const app = express();
mongoose.connect('mongodb://heroku_nssn5tg2:uml01kokbsq74pi78hcsb63sk7@ds147589.mlab.com:47589/heroku_nssn5tg2') //mongodb://localhost:27017/futbolito
    .then(db => console.log('BD esta conectada'))
    .catch(err => console.error(err));
//settings

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/futbolito', require('./routes/jugador'))



//server is listening
app.listen(app.get('port'), () => {
 console.log('server on port 3000');
});