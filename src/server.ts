import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cultosRouter from "./routes/cultos";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/cultos", cultosRouter);

// Middleware de erro para capturar erros não tratados
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  }
);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
