import * as paperRepository from '../repository/PaperRepository'
import { Paper } from '../model/Paper';

//Typically, you would put business logic inside of your service layer
// if you wanted to implement filtering or some complex functionality, this could be
// a place to do it
// services call on repositories
// controllers/routers call on services
export async function findAllPaper():Promise<Paper[]>{
    return paperRepository.findAllPaper();
}

export async function saveOnePaper(input:Paper):Promise<Paper>{
    return paperRepository.saveOnePaper(input);
}