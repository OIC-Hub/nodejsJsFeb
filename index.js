const http = require('http');
const fs = require('fs');
const routePage = require('./routes/pages')
const server = http.createServer(routePage)
server.listen(3001)