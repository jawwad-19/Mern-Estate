import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
console.log('MONGO env var:', process.env.MONGO);
mongoose.connect(process.env.MONGO)
  .then(() => console.log('Successfully Connected to MongoDB !'))
  .catch(err => console.log(err));
const app=express();
app.listen(5000,()=>{
    console.log('Server is running on port 5000!!');
}  
);
