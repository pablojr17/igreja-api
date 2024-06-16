import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import cultosRouter from "./routes/cultos";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/cultos", cultosRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});