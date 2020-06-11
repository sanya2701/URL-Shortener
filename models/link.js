const mongoose = require('mongoose');
const shortId = require("shortid");

const urlSchema = new mongoose.Schema({
     longurl : {
         type : String,
     },
     shorturl : {
         type :String,
         default:shortId.generate
     },
     count :{
         type : Number,
         default:0
     }
})

const Url = mongoose.model('Url',urlSchema);
module.exports = Url;