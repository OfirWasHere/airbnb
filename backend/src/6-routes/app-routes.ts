import express, { Request, Response, NextFunction } from "express";
import appService from "../5-services/app-service";

const router = express.Router(); // Capital R

// gets all airbnb houses with rating and pictures (for all including not logged in)
// Get http://localhost:4000/api/list/all
router.get("/list/all", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const data = await appService.getAirbnbListings();
        response.json(data);
    }
    catch (err: any) {
        next(err);
    }
});

// Get one airbnb house by id
// Get http://localhost:4000/api/list/:id

router.get("/list/:id([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const data = await appService.getAirbnbListings();
        response.json(data);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;
