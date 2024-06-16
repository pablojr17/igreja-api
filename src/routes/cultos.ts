import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();
const dbFilePath = path.resolve(__dirname, "../../db.json");

interface Dizimista {
  nome: string;
  valor: number;
}

interface Culto {
  dataCulto: string;
  nomeCulto: string;
  oferta: number;
  dizimistas: Dizimista[];
}

// Ler os dados do arquivo JSON
const readDb = (): { cultos: Culto[] } => {
  const data = fs.readFileSync(dbFilePath, "utf-8");
  return JSON.parse(data);
};

// Escrever os dados no arquivo JSON
const writeDb = (data: { cultos: Culto[] }) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

// Obter todos os cultos
router.get("/", (req, res) => {
  const db = readDb();
  res.json(db.cultos);
});

// Adicionar um novo culto
router.post("/", (req, res) => {
  const db = readDb();
  const newCulto: Culto = req.body;
  db.cultos.push(newCulto);
  writeDb(db);
  res.status(201).json(newCulto);
});

export default router;
