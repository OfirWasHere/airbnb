import UserModel from "../4-models/user-model"
import jwt from "jsonwebtoken";

const secretKey = "IDareYouToGuessMe"

function createNewToken(user: UserModel): string {
    // Remove password:
    delete user.password;

    // Create container for the user object(payload) it will automatically converted to string:
    const container = { user };

    // Options for token (algorithm: hs256 change later...)
    const options = { expiresIn: "3h" }

    const token = jwt.sign(container, secretKey, options);

    return token;
}

function verifyToken(request:Request): Promise<boolean> {
    return;
}
















// https://github.com/auth0/node-jsonwebtoken
// https://gist.github.com/ziluvatar/a3feb505c4c0ec37059054537b38fc48
// https://www.npmjs.com/package/jsonwebtoken