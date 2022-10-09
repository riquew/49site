import express from "express";
import mongoose, { Schema } from 'mongoose';

try {
  await mongoose.connect('mongodb://localhost:27017/cmts49');
} catch (error) {
  console.log(error);
}

const cmts49 = new Schema({
    nome: String,
    anoInicio: Number,
    anoSaida: Number
});

// const cmt = mongoose.model('cmt', cmts49);
// const yasui = new cmt({nome: "Eduardo Yasui", anoInicio: 2020, anoSaida: 2021});
// yasui.save(); 


const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("home")
});

app.get("/1cia", (req, res) => {
    res.render("1cia")
});

app.get("/2cia", (req, res) => {
    res.render("2cia")
});

app.get("/3cia", (req, res) => {
    res.render("3cia")
});

app.get("/ft", (req, res) => {
    res.render("ft")
});

app.get("/batalhao", (req, res) => {
    res.render("batalhao")
})

app.get("/atualcmt", (req, res) => {
    res.render("atualcmt")
});

app.get("/galeriacmts", (req, res) => {
    res.render("galeriacmts")
});

app.get("/policialdomes", (req, res)=> {
    res.render("policialDoMes")
});

app.get("/servicos", (req, res) => {
    res.render("servicos")
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });