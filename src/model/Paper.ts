export class Paper{
    id: number;
    type:string;
    price:number;
    color:string;
    size:string;
    constructor(id:number=0,type:string = "generic", price:number = 0.00, color:string = "white", size:string = "normal") {
        this.id = id;
        this.type = type;
        this.price = price;
        this.color = color;
        this.size = size;
    }
    
}