import express from "express";
import { router } from "./routes";
import cors from 'cors'

const app = express()

app.use(cors({
    origin: "https://teppa-frontend.vercel.app",
}))

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(express.json())

app.use(router)

app.get('/', (req, res) => {
    res.send('Hello world')
})

const port = process.env.PORT || 3333

app.listen(port, () => console.log("========== Server is running =========="))