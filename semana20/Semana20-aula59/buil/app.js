"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
const server = app.listen(3003, () => {
    if (server) {
        const adress = server.address();
        console.log(`Server is running in http://localhost:${adress.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
exports.default = app;
//# sourceMappingURL=app.js.map