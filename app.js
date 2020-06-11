const express = require("express");
const Handlebars = require('handlebars')
const handlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const mongoose = require("mongoose");
const app = express();

//database connection
mongoose.connect('mongodb+srv://sanya2701:Sanya@123@cluster0-ajwhy.mongodb.net/url_shortener?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err,db)=>{
    console.log("Database Connected")
});

//models
const Url = require("./models/link");

//handlebars
app.set("view engine","hbs");
app.engine('hbs', handlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout:'index',
    extname: 'hbs'
    }));

//body-parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use("/",require("./routes/index"));

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("Weather App started")
})