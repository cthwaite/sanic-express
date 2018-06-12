const express = require('express');
const http = require('http');

const serve_port = 7475;

const app = express();

app.server = http.createServer(app);

app.use(express.static('build'));

app.listen(serve_port, () => console.log('Listening on http://localhost:' + serve_port));
