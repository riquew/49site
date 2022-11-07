import express from "express";
import mongoose, { Schema } from 'mongoose';

try {
  await mongoose.connect('mongodb://localhost:27017/49bpmi');
} catch (error) {
  console.log(error);
}

const cmts49 = new Schema({
    nome: String,
    anoInicio: Number,
    anoSaida: Number
});

const sedes = new Schema({
    imagem: String,
    titulo: String,
    endereco: String,
    telefone: String,
    link: String
})

const cmt = mongoose.model('cmt', cmts49);
const btl = mongoose.model('btl', sedes)
const cia1 = mongoose.model('cia1', sedes);
const cia2 = mongoose.model('cia2', sedes);
const cia3 = mongoose.model('cia3', sedes);
const ciaft = mongoose.model('ciaft', sedes);

const yasui = new cmt({nome: "Eduardo Yasui", anoInicio: 2019, anoSaida: 2020});
// yasui.save(); 
const malco = new cmt({nome: "Malco Basilio", anoInicio: 2020, anoSaida:2021});
// malco.save();
const pauloHenrique = new cmt({nome: "Paulo Henrique Rosas", anoInicio: 2021, anoSaida: 2022});
// pauloHenrique.save();

const sedeBtl = new btl({
    imagem: "btl/btl.jpg",
    titulo: "Batalhão - Jundiaí",
    endereco: "Av. Rio Branco, 318 - Vila Santa Rosa",
    telefone: "(11) 4587-5000",
    link: "https://www.google.com/maps/place/R.+Bar%C3%A3o+do+Rio+Branco,+318+-+Vila+Santa+Rosa,+Jundia%C3%AD+-+SP,+13201-670/@-23.195676,-46.8783087,17z/data=!3m1!4b1!4m5!3m4!1s0x94cf26c375155555:0x9c9aa33bb3ff8e09!8m2!3d-23.195676!4d-46.87612"
});

// sedeBtl.save()

const sedeJundiai = new cia1({
    imagem: "1 cia/jundiai.jpg",
    titulo: "1ª Cia - Jundiaí",
    endereco: "Av. Comendador Antônio Borin, 3480 - Colônia",
    telefone: "(11) 4584-1801",
    link: "https://www.google.com/maps/place/Av.+Comendador+Ant%C3%B4nio+Borin,+3480+-+Col%C3%B4nia,+Jundia%C3%AD+-+SP,+13218-640,+Brasil/@-23.1687164,-46.8557621,14.25z/data=!4m5!3m4!1s0x94cf27123502dc27:0x259a45d69b79881a!8m2!3d-23.1753286!4d-46.8483898?hl=pt-BR"
});

// sedeJundiai.save();

const sedeItatiba = new cia2({
    imagem: "2 cia/itatiba.jpg",
    titulo: "2ª Cia - Itatiba",
    endereco: "Rua Castro Alves, 372 - Santa Terezinha",
    telefone: "(11) 4538-3661",
    link: "https://www.google.com.br/maps/place/R.+Castro+Alves,+372+-+Vila+Santa+Terezinha,+Itatiba+-+SP,+13253-280/@-23.0088135,-46.832575,17z/data=!3m1!4b1!4m5!3m4!1s0x94cf2a7c1c9a6fd7:0xd4e2fe45ff8342f7!8m2!3d-23.0088185!4d-46.8303863"
})

// sedeItatiba.save();

const sedeLouveira = new cia2({
    imagem: "2 cia/louveira.jpg",
    titulo: "2ª Cia - Louveira",
    endereco: "Rua 21 de Março, 66 - Vila Pasti",
    telefone: "(19) 3848-1458",
    link: "https://www.google.com.br/maps/place/R.+21+de+Mar%C3%A7o,+66+-+Vila+Pasti,+Louveira+-+SP,+13290-000/@-23.0854578,-46.9507318,17z/data=!4m5!3m4!1s0x94cf2e7904294c9f:0x136f82ad023416c8!8m2!3d-23.0854578!4d-46.9485431"
})

// sedeLouveira.save();

const sedeMorungaba = new cia2({
    imagem: "2 cia/morungaba.jpg",
    titulo: "2ª Cia - Morungaba",
    endereco: "Rua Pereira Cardoso, 34 - Centro",
    telefone: "(11) 4014-7622",
    link: "https://www.google.com.br/maps/place/R.+Pereira+Cardoso,+34,+Morungaba+-+SP,+13260-000/@-22.8798717,-46.793954,17z/data=!3m1!4b1!4m5!3m4!1s0x94c92a297b3819fd:0xf98ec9fe6e3cf55b!8m2!3d-22.8798717!4d-46.7917653"
})

// sedeMorungaba.save();

const sedeVarzea = new cia3({
    imagem: "3 cia/varzea.jpg",
    titulo: "3ª Cia - Várzea Paulista",
    endereco: "Rua Frei Henrique de Coimbra, 42 - Jardim das Acacias",
    telefone: "(11) 4595-0083",
    link: "https://www.google.com.br/maps/place/R.+Frei+Henrique+de+Coimbra,+42+-+Jardim+das+Acacias,+V%C3%A1rzea+Paulista+-+SP,+13223-360/@-23.2115731,-46.8101824,17z/data=!3m1!4b1!4m5!3m4!1s0x94cedf6b7c1bbe35:0xc899c0ab1d8c52ce!8m2!3d-23.2115731!4d-46.8079937"
})

// sedeVarzea.save();

const sedeCampoLimpo = new cia3({
    imagem: "3 cia/campolimpo.jpg",
    titulo: "3ª Cia - Campo Limpo Paulista",
    endereco: "Avenida dos Emancipadores, 633 - Centro",
    telefone: "(11) 4039-3466",
    link: "https://www.google.com.br/maps/place/Av.+dos+Emancipadores,+633+-+Jardim+Santa+Catarina,+Campo+Limpo+Paulista+-+SP,+13230-065/@-23.206869,-46.7801341,17z/data=!3m1!4b1!4m5!3m4!1s0x94cedefab7995bed:0x7518a11fbfd29391!8m2!3d-23.206869!4d-46.7779454"
})

// sedeCampoLimpo.save();

const sedeJarinu = new cia3({
    imagem: "3 cia/jarinu.jpg",
    titulo: "3ª Cia - Jarinu",
    endereco: "Rua Eugênio da Silva Bressane, 76 - Centro",
    telefone: "(11) 4916-4394",
    link: "https://www.google.com/maps/place/R.+Eug%C3%AAnio+da+Silva+Bressane,+76+-+Centro,+Jarinu+-+SP,+13240-000/@-23.1023486,-46.73031,17z/data=!3m1!4b1!4m5!3m4!1s0x94ceda151ad52141:0xf3f99686b22445d9!8m2!3d-23.1023486!4d-46.73031"
})

// sedeJarinu.save();

const sedeFt = new ciaft({
    imagem: "ciaft/sedeft.jpg",
    titulo: " Força Tática - Jundiaí",
    endereco: "Av. Comendador Antônio Borin, 3480 - Colônia",
    telefone: "(11) 4584-1801",
    link: "https://www.google.com/maps/place/Av.+Comendador+Ant%C3%B4nio+Borin,+3480+-+Col%C3%B4nia,+Jundia%C3%AD+-+SP,+13218-640,+Brasil/@-23.1687164,-46.8557621,14.25z/data=!4m5!3m4!1s0x94cf27123502dc27:0x259a45d69b79881a!8m2!3d-23.1753286!4d-46.8483898?hl=pt-BR"
})

// sedeFt.save();

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("home")
});

app.get("/1cia", async (req, res) => {
    let result = await cia1.find({});
    res.render("sedes", {sedes: result})
});

app.get("/2cia", async (req, res) => {
    let result = await cia2.find({});
    res.render("sedes", {sedes: result})
});

app.get("/3cia", async (req, res) => {
    let result = await cia3.find({});
    res.render("sedes", {sedes: result})
});

app.get("/ft", async (req, res) => {
    let result = await ciaft.find({});
    res.render("sedes", {sedes: result})
});

app.get("/batalhao", async (req, res) => {
    let result = await btl.find({});
    res.render("sedes", {sedes: result})
})

app.get("/atualcmt", (req, res) => {
    res.render("atualcmt")
});

app.get("/galeriacmts", async (req, res) => {
    let result = await cmt.find({});
    res.render("galeriacmts", {listacmt: result})
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