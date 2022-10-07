import express,{Express,Request,Response} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import ownerRoute from './src/routes/owner.route';

dotenv.config();

const app:Express = express();
const port=process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/owners',ownerRoute);

app.get('/', (req:Request, res:Response) => {
  res.send('Express + TypeScript Server');

});

mongoose.connect(`${process.env.MONGO_URL}`, {
},
  err => {
    if (!err) {
      console.log('Database connection successed');
    } else {
      console.log('Error in connection ' + err);
    }
  });


app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

