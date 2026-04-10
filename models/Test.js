import mongoose from "mongoose";

const testShema =new mongoose.Schema(
   {
patient : { type:mongoose.Schema.Types.ObjectId,ref:"Patient"},
title:String,
date   : {type:Date,default:Date.now},
Scrore:Number,
resultat:String } 
);

const Test = mongoose.model("Test", testShema);

export default Test;