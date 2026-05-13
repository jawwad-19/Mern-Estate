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