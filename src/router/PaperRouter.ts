import {Router} from 'express';
import * as paperService from '../service/PaperService'
import { Paper } from '../model/Paper';

// in order to make a router, you import "Router" from express
// then you execute the Router
export const paperRouter = Router();


// Routers allow you to avoid throwing all of your routes in your main index.ts file
// routers typically call on services which call on repositories
paperRouter.get('/', async (req,res)=>{
    try{
        res.json(await paperService.findAllPaper());
    }catch(e){
        // if something goes wrong, send back a 500 error and the error message
        res.status(500).send(e.message)
    }
})

//this route requires input from the boy of an http request.
// in order for it to run properly, make sure you app.use() the body parser in index.ts
paperRouter.post('/', async (req,res)=>{
    // the line below is getting information from the body of the request via destructuring
    let {type,price,color,size}:{type:string,price:number,color:string,size:string} = req.body //try outputting req.body to the console to see what it looks like
    try{        
        let paper: Paper = await paperService.saveOnePaper(new Paper(0,type,price,color,size))
        // upon successful creation, send back a 201 (created)
        res.status(201).json(paper);
    }catch(e){
        res.status(500).send(e.message)
    }
})
