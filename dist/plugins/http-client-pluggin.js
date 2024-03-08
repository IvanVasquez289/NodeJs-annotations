"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientPluggin = void 0;
const axios_1 = __importDefault(require("axios"));
exports.httpClientPluggin = {
    get: (url) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield (0, axios_1.default)(url);
        return data;
        // const resp = await fetch(url)
        // return await resp.json()
    }),
    post: (url, body) => __awaiter(void 0, void 0, void 0, function* () {
        throw new Error('Not implemented yet');
    }),
    put: (url, body) => __awaiter(void 0, void 0, void 0, function* () {
        throw new Error('Not implemented yet');
    }),
    delete: (url) => __awaiter(void 0, void 0, void 0, function* () {
        throw new Error('Not implemented yet');
    }),
};