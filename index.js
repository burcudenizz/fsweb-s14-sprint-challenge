// Server'ı buradan başlatın

const server=require("./api/server"); // 4-server.js'i import ettik.
const port=9000; //5-port tanımladık.

server.listen(port,()=>{
    console.log("Server is running on port " + port);
}) //6-server'ı çalıştırmak için server.listen() 