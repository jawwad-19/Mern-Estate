import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
<<<<<<< HEAD
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

mongoose
  .connect("mongodb://jawwad:jawwad@ac-33hx18k-shard-00-00.id8fqec.mongodb.net:27017,ac-33hx18k-shard-00-01.id8fqec.mongodb.net:27017,ac-33hx18k-shard-00-02.id8fqec.mongodb.net:27017/?ssl=true&replicaSet=atlas-ew5u8r-shard-0&authSource=admin&appName=realestate")
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

  const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
=======
dotenv.config({ path: '../.env' });
console.log('MONGO env var:', process.env.MONGO);
mongoose.connect(process.env.MONGO)
  .then(() => console.log('Successfully Connected to MongoDB !'))
  .catch(err => console.log(err));
const app=express();
app.use(express.json());
app.listen(5000,()=>{
    console.log('Server is running on port 5000!!');
}  
);

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success:false,
    status:statusCode,
    message,
  });
});
>>>>>>> 9fd1453f029e3449823ac9ad09b238362e52676e
