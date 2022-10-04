import express from "express";

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("home")
});

app.get("/", (req, res) => {
    res.send("works")
})



app.listen(3000, function() {
    console.log("Server started on port 3000");
  });