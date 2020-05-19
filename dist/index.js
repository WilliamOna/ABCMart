"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
//ES6 spec for importing
const config_1 = require("./config/");
const express_1 = __importDefault(require("express"));
const PaperRouter_1 = require("./router/PaperRouter");
const bodyparser = __importStar(require("body-parser"));
const logging_middleware_1 = require("./middleware/logging-middleware");
const session_middleware_1 = require("./middleware/session-middleware");
const LogInRouter_1 = require("./router/LogInRouter");
//create express server
exports.app = express_1.default();
// app.use is a function that can be used to apply middleware
//bodyparser is a middleware that makes it possible for you to obtain the contents
// of the body of an http request
// we want to parse json, so we call the json function on it
// make sure you app.use the body parser before you app.use routers that need it
exports.app.use(bodyparser.json());
exports.app.use(logging_middleware_1.loggingMiddleware);
exports.app.use(session_middleware_1.sessionMiddleware);
// the line below applies the paperRouter routes from the router layer
exports.app.use('/paper', PaperRouter_1.paperRouter);
exports.app.use('/auth', LogInRouter_1.loginRouter);
// start the server
exports.app.listen(config_1.PORT, () => {
    console.log(`Running on port: ${config_1.PORT}`);
});
