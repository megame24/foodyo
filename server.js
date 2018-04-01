const express = require('express'),
      morgan = require('morgan'),
      path = require('path'),
      app = express(),
      port = process.env.PORT || 3000,
      mongoose = require('mongoose'),
      devEnv = require('./config/devEnv'),
      env = devEnv;

mongoose.Promise = global.Promise;
mongoose.connect(env.database.uri, (err) => {
    if(err) console.log('Could not connect to db' + err);
    else console.log('connect to database: ' + env.database.db);
});

app.use('/dist', express.static('dist'));
app.use(morgan('dev'));

app.use(function(req, res, next){
    req.yo = 'yo';
    return next();
 });

app.get('/user', (req, res) => {
    res.json(req.yo);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
    console.log('server started at port:', port);
});