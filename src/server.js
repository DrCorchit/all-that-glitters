import finalhandler from "finalhandler";
import http from "http";
import serveStatic from "serve-static";

// Serve up public/ftp folder
const serve = serveStatic("dist", {index: ["index.html"]});

// Create server
const server = http.createServer(function onRequest(req, res) {
	serve(req, res, finalhandler(req, res));
});

// Listen
server.listen(5173);
