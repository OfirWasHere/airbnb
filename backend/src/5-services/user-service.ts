import { OkPacket } from "mysql";
import dal from "../2-utils/dal";

async function getAirbnbListings() {
    const sql = "SELECT * FROM `main-data`";
    const response = await dal.execute(sql);
    return response;
}

async function getAllRatings() {
    const sql = "SELECT `property_id`, SUM(`rating`) / COUNT(DISTINCT `userId`) AS `average_rating` FROM `rating` GROUP BY `property_id`";
    const response = await dal.execute(sql);
    console.log(response);
    return response;
}

export default {
    getAirbnbListings,
    getAllRatings
};