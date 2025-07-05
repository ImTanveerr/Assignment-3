"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = 5000;
async function main() {
    try {
        await mongoose_1.default.connect(`${process.env.MONGODB_URI}`);
        console.log('MongoDB connected');
        app_1.default.listen(port, () => {
            console.log(`Server is listening to port ${port}`);
        });
    }
    catch (error) {
        console.log('Error in main function in server.ts', error);
    }
}
main();
