const express = require("express");
const app = express();
// const http = require("http");
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  //   res.sendFile(__dirname + "/index.html");
  res.send("Hello, World!");
});

// io.on("connection", (socket) => {
//   socket.on("data", function (data) {
//     io.emit("chat", data);
//   });
//   console.log("a user connected");
// });

server.listen(port, () => {
  console.log("listening on port: " + port);
});
