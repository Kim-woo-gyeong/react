  
import * as path from 'path';
import express from 'express';
import cors from 'cors';
import fs from 'fs';

const PORT = 8888;
// .use('/', express.static(path.resolve('.', 'public')))
//파일 다 읽을때까지 밑으로 내려가지 않음.
express()
    .use(cors())
    .get('/emaillist', (req, resp) => {
        resp
        .status(200)
        .json({
            result:'success',
            message:null,
            data: JSON.parse(fs.readFileSync(path.resolve('.','data','emaillist','data.json')).toString())
        });
    })
    .listen(PORT, () => console.log('starts API server on port ' + PORT));