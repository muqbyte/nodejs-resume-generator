const express= require("express")
const app=express();
const port=8080;
const allController= require("./Controller/homeController")
// const generateResume= require("./Controller/generate.js")

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs");

app.get('/',allController.HomeController)

app.post('/generate', allController.generateResume)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})