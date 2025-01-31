import express from "express";
import cors from "cors";
import routes from "./routes"

const server = express();
const PORT = 8000;

/*
**************************
Middleware
**************************
*/
server.use(cors({
    origin: 'http://localhost:3000'
}));

server.use(express.json())
server.use("/", routes);

/*
************************** 
Server Startup
**************************
*/

server.listen(PORT, () => {
    console.log(`Node server running on port: ${PORT}`)
});
