import { OkPacket } from "mysql";
import dal from "../2-utils/dal";

async function getAllMainData() {
    const sql = "SELECT * FROM `main-data`";
    const response = await dal.execute(sql);
    return response;
}

export default {
    getAllMainData
};
