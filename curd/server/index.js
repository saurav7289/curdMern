import express from 'express';
import cors from 'cors';
import connection from './database/db.js';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();

const PORT = process.env.PORT || 8000;
connection();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use('/', Routes);


// heroku code:
if(process.env.NODE_ENV==='production')
{
    app.use(express.static(path.join(__dirname,"client","build")));
    // app.get("*",(req,resp)=>{
    //     resp.sendFile(path.join(__dirname,"client","build","index.html"));
    // })
}


app.listen(PORT, () => console.log(`server run at port ${PORT}`));
