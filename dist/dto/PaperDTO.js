"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToPaperArray = exports.PaperDTO = void 0;
const Paper_1 = require("../model/Paper");
//This class represents the Paper object that is in the DB. Notice that the fields match the
// DB fields exactly (the regular Paper class doesn't have a 'supplier' field, but the DB does)
class PaperDTO {
    constructor(id, type = "generic", price = 0.00, color = "white", size = "normal", supplier = "paper co.") {
        this.id = id;
        this.type = type;
        this.price = price;
        this.color = color;
        this.size = size;
        this.supplier = supplier;
    }
}
exports.PaperDTO = PaperDTO;
// this is the fucntion that is used in the repository to convert from the DB Paper to the Paper that is used in our
// node server 
function convertToPaperArray(input) {
    const newPaper = new Paper_1.Paper(input.id, input.type, input.price, input.color, input.size);
    return newPaper;
}
exports.convertToPaperArray = convertToPaperArray;
