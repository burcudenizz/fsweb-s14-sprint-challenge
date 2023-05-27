// serverı buraya yazın ve index.js require yazın

const express = require("express"); // 1-expressi getirdik.
const server = express(); //2-expressi servera bağladık.
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

server.use(express.json()); //3-server json formatı kullanacak.
server.use("/api/projects", projectRouter);
server.use("/api/tasks", taskRouter);
server.use("/api/resources", resourceRouter);
module.exports = server;
