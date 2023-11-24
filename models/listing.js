const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title:{
     type:String,
     required:true,
     
    }, 
     description: String,
     image: {
       type: String,
       default: "http://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFY2h8MTj8fGdvYXxlbnww", 
       set: (v) =>
       v === "" 
       ? "http://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFY2h8MTj8fGdvYXxlbnww" 
       : v,
     },
     price:Number,
     location:String,
     country: String,

});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;