import RoleModel from "./role-model";
import { UploadedFile } from "express-fileupload";

class UserModel {
    public user_id:number;
    public host_type_id:number;
    public first_Name:string;
    public last_Name:string;
    public email:string;
    public password:string;
    public userImage:string;
    public imageFile:UploadedFile;
    public role:RoleModel;
    
    public constructor(user:UserModel){
        this.user_id = user.user_id
        this.host_type_id = user.host_type_id
        this.first_Name = user.first_Name
        this.last_Name = user.last_Name
        this.email = user.email
        this.password = user.password
        this.userImage = user.userImage
        this.imageFile = user.imageFile
        this.role = user.role
    }
}
export default UserModel;