"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMiddleware = void 0;
const express_session_1 = __importDefault(require("express-session"));
//thi is the object that we will use to configure our session middleware
const sessionConfig = { secret: 'mySecret' };
// we can call app.use() in index.ts with this object to enable the use of sessions
exports.sessionMiddleware = express_session_1.default(sessionConfig);
