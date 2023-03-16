import { UploadedFile } from "express-fileupload";

class MainData {
    property_id:number;
    user_Id:number;
    title:string;
    description:string
    start_Date:string;
    end_Date:string;
    price:number;
    guest_Amount:number;
    bedrooms_Amount:number;
    bathrooms_Amount:number;
    address:string;
    city:string;
    state:string;
    country:string;
    // Images:
    primary_Image:string;
    image_name2:string;
    image_name3:string;
    image_name4:string;
    image_name5:string;
    image:UploadedFile;

    public constructor(data:MainData){
        this.property_id = data.property_id
        this.user_Id = data.user_Id
        this.title = data.title
        this.start_Date = data.start_Date
        this.end_Date = data.end_Date
        this.price = data.price
        this.guest_Amount = data.guest_Amount
        this.bedrooms_Amount = data.bedrooms_Amount
        this.bathrooms_Amount = data.bathrooms_Amount
        this.address = data.address
        this.city = data.city
        this.state = data.state

        // Images
        this.primary_Image = data.primary_Image
        this.image_name2 = data.image_name2
        this.image_name3 = data.image_name3
        this.image_name4 = data.image_name4
        this.image_name5 = data.image_name5
        this.image = data.image;
    }
};
