"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const owner_route_1 = __importDefault(require("./src/routes/owner.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use('/api/owners', owner_route_1.default);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
mongoose_1.default.connect(`${process.env.MONGO_URL}`, {}, err => {
    if (!err) {
        console.log('Database connection successed');
    }
    else {
        console.log('Error in connection ' + err);
    }
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
