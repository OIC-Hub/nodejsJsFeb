const http = require('http');
const fs = require('fs');
const path = require('path')
const express = require('express');
const routePage = require('./routes/pages')
const pageRouter = require('./routes/pages');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(routePage);
app.listen(3001)