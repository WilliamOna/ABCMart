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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paperRouter = void 0;
const express_1 = require("express");
const paperService = __importStar(require("../service/PaperService"));
const Paper_1 = require("../model/Paper");
// in order to make a router, you import "Router" from express
// then you execute the Router
exports.paperRouter = express_1.Router();
// Routers allow you to avoid throwing all of your routes in your main index.ts file
// routers typically call on services which call on repositories
exports.paperRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield paperService.findAllPaper());
    }
    catch (e) {
        // if something goes wrong, send back a 500 error and the error message
        res.status(500).send(e.message);
    }
}));
//this route requires input from the boy of an http request.
// in order for it to run properly, make sure you app.use() the body parser in index.ts
exports.paperRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // the line below is getting information from the body of the request via destructuring
    let { type, price, color, size } = req.body; //try outputting req.body to the console to see what it looks like
    try {
        let paper = yield paperService.saveOnePaper(new Paper_1.Paper(0, type, price, color, size));
        // upon successful creation, send back a 201 (created)
        res.status(201).json(paper);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
