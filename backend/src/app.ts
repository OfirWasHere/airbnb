import cors from "cors";
import express from "express";
import appConfig from "./2-utils/app-config";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import router from "./6-routes/app-route";


const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", router);
server.use(routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () =>{
    console.log("Server Listening on: " + appConfig.clientUrl);
    
})