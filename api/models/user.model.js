<<<<<<< HEAD
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
=======
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true 
    },
    avatar:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/previews/035/624/082/large_2x/user-profile-person-icon-in-flat-isolated-in-suitable-for-social-media-man-profiles-screensavers-depicting-male-face-silhouettes-for-apps-website-vector.jpg"
    }
},{timestamps:true}
);
const User = mongoose.model('User', userSchema);
export default User;
>>>>>>> 9fd1453f029e3449823ac9ad09b238362e52676e
