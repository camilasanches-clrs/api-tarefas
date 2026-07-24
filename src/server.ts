import express from "express";
import router from "./routes/tarefas.routes"

const app = express();

app.use(express.json());
app.use('/tasks', router);


const imprimeMensagem = () => {
    console.log("Executando");
}

app.listen(3000, imprimeMensagem);

