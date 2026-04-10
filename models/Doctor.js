import mongoose from "mongoose";

const doctorShema = new mongoose.Schema(
   {
    nom:String,
    specialite:String,
    email: String
}, 
{ timestamps: true });
   
const Doctor = mongoose.model("Doctor", doctorShema);

export default Doctor;