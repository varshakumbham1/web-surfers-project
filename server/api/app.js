import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

//connection string
mongoose.connect("mongodb+srv://websurfers:websurfers@nu-events.bbtsijg.mongodb.net/test", ()=>{
    console.log('connected to mongoDB');
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

routes(app);
export default app;