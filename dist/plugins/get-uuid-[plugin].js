"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidv4 = void 0;
const uuid_1 = require("uuid");
const uuidv4 = () => {
    return (0, uuid_1.v4)();
};
exports.uuidv4 = uuidv4;
