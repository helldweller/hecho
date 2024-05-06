const http = require('http');

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    console.log(`${req.socket.remoteAddress} ${res.statusCode} ${req.method} ${req.url}`)
    res.end(JSON.stringify({ ...{ remoteAddress: req.socket.remoteAddress }, ...req.headers }));
};

const app = http.createServer(requestListener);

const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';

const server = app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}/`);
});

['SIGINT', 'SIGTERM', 'SIGQUIT', 'SIGHUP'].forEach(
  signal => process.on(signal, () => {
    console.log(`${signal} signal received: closing HTTP server`)
    server.close(() => {
      console.log('HTTP server closed')
    })
    process.exit()
  })
);
