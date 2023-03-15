import RoleModel from "./role-model";
import { UploadedFile } from "express-fileupload";

class UserModel {
    user_id:number;
    host_type_id:number;
    first_Name:string;
    last_Name:string;
    email:string;
    password:string;
    userImage:string;
    imageFile:UploadedFile;
    role:RoleModel;
}
export default UserModel;