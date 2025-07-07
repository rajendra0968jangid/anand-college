import express from 'express';
import router from './routes/user.route.js';
import 'dotenv/config'
import  './db/conn.js';
import bodyParser from 'body-parser';
const app = express();

//
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())  
//

const port = process.env.PORT;

app.use("/user",router)

app.listen(port,()=>console.log(port));