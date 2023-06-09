import { OkPacket } from "mysql";
import dal from "../2-utils/dal";

async function getAirbnbListings() {
    const sql = "SELECT `main-data`.*, ROUND(AVG(`rating`.`rating`), 1) AS `average_rating` FROM `main-data` LEFT JOIN `rating` ON `main-data`.`property_id` = `rating`.`property_id` GROUP BY `main-data`.`property_id`";
    const response = await dal.execute(sql);
    return response;
}

async function getOneAirbnbListing() {
    const sql = "";
    const response = await dal.execute(sql);
    return response;
}

export default {
    getAirbnbListings,
};