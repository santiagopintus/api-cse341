const { debug } = require("debug");
const http = require("http");
const express = require("express");
const app = express();

const normalizePort = (val) => {
  let port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

const onError = (err) => {
  if (err.syscall !== "listen") throw err;
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${port}`;

  switch (err.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privilages`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw err;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${port}`;
  debug(`Listening on ${bind}`);
};

/* Define port */
const port = normalizePort(process.env.PORT || 1234);

// For json formatting
app.use(express.json());

// mount the router on the app
app.use("/", require("./routes"));

/* Add port to APP */
app.set("port", port);

/* Create server */
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
