"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paper = void 0;
class Paper {
    constructor(id = 0, type = "generic", price = 0.00, color = "white", size = "normal") {
        this.id = id;
        this.type = type;
        this.price = price;
        this.color = color;
        this.size = size;
    }
}
exports.Paper = Paper;
