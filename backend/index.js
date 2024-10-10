import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";

const app = express();

const direct = dirname(fileURLToPath(import.meta.url));

app.use(express.static(direct + "/frontend"));

app.get("/", function(req, res){
    res.sendFile(direct+"/frontend/index.html");
})

app.listen(3000, ()=>{
    console.log("File is listening at port 3000 !");
})

