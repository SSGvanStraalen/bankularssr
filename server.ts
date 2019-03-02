import 'zone.js/dist/zone-node';
import {enableProdMode} from '@angular/core';

import * as express from 'express';
import {join} from 'path';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const passport = require('./routes/common/passport');
const api = require('./routes/api');


// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const dist = process.env.DIST || 'dist/browser';

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), dist);


app.use(passport.init());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', api.router);

// Serve static files from /browser
app.use(express.static(DIST_FOLDER));


// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
  console.log(DIST_FOLDER)
});
