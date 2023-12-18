const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
const port = 3000;
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
//const { join } = require('path');
const cors = require('cors');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
var timeout = require('connect-timeout')
const { readFileSync } = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


app.use(
    fileUpload({
        limits: {
            fileSize: 10000000,
        },
        abortOnLimit: true,
    })
);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3001, () => {
    console.log('Admin app listening on port 3001');
});

app.use('/output', express.static('output'));
