/*const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server); // < Interesting!
const getApiAndEmit = "TODO"


io.on("connection", socket => {
	
	// res.send({ response: "yeni tarayıcı bağlandı" }).status(200);
	 
  console.log("New client connected"), setInterval(
    () => getApiAndEmit(socket),
    10000
  );
  socket.on("disconnect", () =>
	//res.send({ response: "biri ayrıldı" }).status(200);
  console.log("Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));




*/


const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);
io.on("connection", socket => {
	getApiAndEmit(socket);
  console.log("yeni client bağlandı"), setInterval(
    () => getApiAndEmit(socket),
    10000
  );
  socket.on("disconnect", () => console.log("Client koptu"));
});
const getApiAndEmit = async socket => {
  try {
    const res = await axios.get(
      "https://api.darksky.net/forecast/e8c8f4c3f4fa5e9744124ea28cde38ad/41.0410347,28.7689234"
    );
    socket.emit("FromAPI", res.data.currently.temperature);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};
server.listen(port, () => console.log(`Listening on port ${port}`));
