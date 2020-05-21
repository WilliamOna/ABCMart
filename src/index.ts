//ES6 spec for importing
import {PORT} from './config/';
import express from 'express';
import {paperRouter} from './router/PaperRouter'
import * as bodyparser from 'body-parser' 
import { loggingMiddleware } from './middleware/logging-middleware';
import { sessionMiddleware } from './middleware/session-middleware';
import { loginRouter } from './router/LogInRouter';

//create express server
export const app = express();

// app.use is a function that can be used to apply middleware

//bodyparser is a middleware that makes it possible for you to obtain the contents
// of the body of an http request
// we want to parse json, so we call the json function on it
// make sure you app.use the body parser before you app.use routers that need it
app.use(bodyparser.json())
app.use(loggingMiddleware)
app.use(sessionMiddleware)
// the line below applies the paperRouter routes from the router layer
app.use('/paper',paperRouter);
app.use('/auth',loginRouter)

app.get('/',(req,res)=>{
    res.send("Welcome to ABC Mart's APIs! Hello To everyone! Thanks for not killing me, Jenkins")
})
// start the server
app.listen(PORT,()=>{
    console.log(`Running on port: ${PORT}`);
})