import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cultosRouter from "./routes/cultos";

const app = express();
const port = process.env.PORT || 5000;

// Configurar o CORS
app.use(cors());

app.use(bodyParser.json());
app.use("/cultos", cultosRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
