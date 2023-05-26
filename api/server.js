// serverı buraya yazın ve index.js require yazın

const express =require("express"); // 1-expressi getirdik.
const server =express(); //2-expressi servera bağladık.

server.use(express.json());

module.exports = server;