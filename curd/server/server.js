import express from 'express';
import cors from 'cors';
import connection from './database/db.js';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();

const PORT = process.env.PORT || 8000;

const URL = process.env.MONGODB_URI || `mongodb+srv://admin:admin@curd-app.macgqd1.mongodb.net/?retryWrites=true&w=majority` 
connection(URL);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use('/', Routes);





app.listen(PORT, () => console.log(`server run at port ${PORT}`));
