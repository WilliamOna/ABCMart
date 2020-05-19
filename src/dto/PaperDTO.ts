import { Paper } from "../model/Paper";

//This class represents the Paper object that is in the DB. Notice that the fields match the
// DB fields exactly (the regular Paper class doesn't have a 'supplier' field, but the DB does)
export class PaperDTO{

    id:number
    type:string;
    price:number;
    color:string;
    size:string;
    supplier:string;
    constructor(id:number,type:string = "generic", price:number = 0.00, color:string = "white", size:string = "normal", supplier:string = "paper co.") {
        this.id = id;
        this.type = type;
        this.price = price;
        this.color = color;
        this.size = size;
        this.supplier = supplier;
    }
}
    
// this is the fucntion that is used in the repository to convert from the DB Paper to the Paper that is used in our
// node server 
export function convertToPaperArray(input:PaperDTO):Paper{
    const newPaper = new Paper(input.id,input.type,input.price,input.color,input.size);
    return newPaper;
}