import express, { Request, Response, NextFunction } from "express";
import appService from "../5-services/app-service";

const router = express.Router(); // Capital R

// GET http://localhost:4000/api/all
router.get("/list", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const data = await appService.getAllMainData();
        response.json(data)
    }
    catch (err: any) {
        next(err);
    }
});

export default router;
