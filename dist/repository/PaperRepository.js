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
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveOnePaper = exports.findAllPaper = void 0;
const Paper_1 = require("../model/Paper");
const _1 = require("./");
const PaperDTO_1 = require("../dto/PaperDTO");
// This file employs the DAO (Data Access Object) design pattern. Essentially, we 
// use abstract all the functions that have to do with accessing the Paper table in the DB
// into this one file
// The convential names for this layer of the application is usually "Repository", "DAO", or "Data"
// This function returns a paper array wrapped in a promise
// that represents all of the papers in the database
function findAllPaper() {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield _1.pool.connect();
            const results = yield client.query("select * from paper");
            // console.table(results.rows);
            // console.log(results.rows);
            let output = results.rows.map(PaperDTO_1.convertToPaperArray);
            // console.log(output);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.findAllPaper = findAllPaper;
// Alternate method using promises...
// client.connect() //returns a promsise
// .then( ()=> console.log("connected!")) //connect to db with creds
// .then( ()=> client.query("select * from paper")) // get all the paper
// .then( results => console.table(results.rows))
// .catch(err => console.log(err))
// .finally(()=>client.end())
//This function will add a paper to the db and then it will return a promise wrapped around the apper that was added to the db
function saveOnePaper(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        let newPaper = new Paper_1.Paper(0, "", 0, "", "");
        try {
            client = yield _1.pool.connect();
            //insert paper into table and retrieve the generated id (optional)
            const result = yield client.query("INSERT INTO paper(type, price, color, size) VALUES($1,$2,$3,$4) RETURNING id;", [input.type, input.price, input.color, input.size]);
            let paperId = result.rows[0].id; // try console.log-ing result.rows to see why we access the id this way
            // console.table(result.rows);
            newPaper = input;
            newPaper.id = paperId;
            return newPaper;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return newPaper;
    });
}
exports.saveOnePaper = saveOnePaper;
// The following are examples of other DAO functions that might be included for the Paper table in the DB
// GET: "/paper/:id" => Get the particular paper with the indicated id 
// (node you could probably also write functions for getting paper by other criteria,such as type or price, if desired)
// method signiature:
// export async function findOnePaperById(id:number): Promise<Paper>{} 
// POST: "/paper/" => create a new paper and add it to the database
// method signiature:
// export async function saveOnePape(id:number): Promise<Paper>{} 
// UPDATE: "/paper/:id" => update the paper with the id of "id
// method signiature:
// export async function updateOnePaperById(id:number): Promise<Paper>{} 
// DELETE: "/paper/:id" => update the paper with the id of "id
// method signiature:
// export async function deleteOnePaperById(id:number): Promise<Paper>{} 
