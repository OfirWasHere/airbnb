import cors from "cors";
import express from "express";
import appConfig from "./2-utils/app-config";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import Routes from "./6-routes/app-routes"


const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", Routes);
server.use(routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () =>{
    console.log("Server Listening on: " + appConfig.clientUrl);
    
})