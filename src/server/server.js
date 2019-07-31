import http from 'http';
import express from 'express';
import path from 'path';

const app = express();

app.use(
    express.static( path.resolve( __dirname, "../build") )
    );

function startServer() {
    // basic http server setup called by prod and dev
    const server = http.createServer(app);
    server.listen(8080, (err) => {
        if (err) {
            console.log('==== ERROR ==== AT : ', err);
            throw err;
        }
        console.log(`server listening on ${server.address().port}`);
    });
}

function setupDevServer() {
    // setupDevServer calls startServer() (http server);
    app.use((req, res, next) => {
        require('./react').default(req, res, next);
    });
    startServer();
}

setupDevServer();