import { Paper } from "../model/Paper";
import {pool} from './'
import { convertToPaperArray } from "../dto/PaperDTO";

// This file employs the DAO (Data Access Object) design pattern. Essentially, we 
// use abstract all the functions that have to do with accessing the Paper table in the DB
// into this one file
// The convential names for this layer of the application is usually "Repository", "DAO", or "Data"

// This function returns a paper array wrapped in a promise
// that represents all of the papers in the database
export async function findAllPaper():Promise<Paper[]>{
    let client;
    try{
        client = await pool.connect();
        const results = await client.query("select * from paper");
        // console.table(results.rows);
        // console.log(results.rows);
        let output = results.rows.map(convertToPaperArray);
        // console.log(output);
        return output;
    }catch(err){
        console.log(err);
    }finally{
        client && client.release();
    }
    return [];
}
// Alternate method using promises...
// client.connect() //returns a promsise
// .then( ()=> console.log("connected!")) //connect to db with creds
// .then( ()=> client.query("select * from paper")) // get all the paper
// .then( results => console.table(results.rows))
// .catch(err => console.log(err))
// .finally(()=>client.end())

//This function will add a paper to the db and then it will return a promise wrapped around the apper that was added to the db
export async function saveOnePaper(input:Paper):Promise<Paper>{
    let client;
    let newPaper = new Paper(0,"",0,"","");
    try{
        client = await pool.connect();
        //insert paper into table and retrieve the generated id (optional)
        const result = await client.query("INSERT INTO paper(type, price, color, size) VALUES($1,$2,$3,$4) RETURNING id;",
        [input.type,input.price,input.color,input.size]);
        let paperId = result.rows[0].id; // try console.log-ing result.rows to see why we access the id this way
        // console.table(result.rows);
        newPaper = input;
        newPaper.id = paperId;
        return newPaper;
    }catch(err){
        console.log(err);
    }finally{
        client && client.release();
    }
    return newPaper;
}


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