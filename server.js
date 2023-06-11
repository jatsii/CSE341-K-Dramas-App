const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
require('dotenv').config();
const axios = require('axios');
const path = require('path');


const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('.'));


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

console.log("Listening at:// port:%s (HTTP)", port);

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));
/*
  process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
  });*/
  
  /*app.set('view engine', 'ejs');
  app.get('/', function(req, res){
    res.render('pages/index');
  });*/
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/index.html'));
  });

  app.get('/auth', (req, res) => {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
    );
  });

  app.get('/oauth-callback', ({ query: { code } }, res) => {
    const body = {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_SECRET,
      code,
    };
    const opts = { headers: { accept: 'application/json' } };
  axios
    .post('https://github.com/login/oauth/access_token', body, opts)
    .then((_res) => _res.data.access_token)
    .then((token) => {
      // eslint-disable-next-line no-console
      console.log('My token:', token);

      res.redirect(`/?token=${token}`);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
});

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});