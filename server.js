import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Lista de agentes con número y mensaje
const agentes = [
  { numero: "541132525913", mensaje: "Hola%20martin,%20me%20creas%20un%20usuario?" },
  { numero: "541171334027", mensaje: "Hola%20lucas,%20me%20creas%20un%20usuario?" },
  { numero: "541156349123", mensaje: "Hola%20cami,%20me%20creas%20un%20usuario?" },
  { numero: "541173566830", mensaje: "Hola%20octavio,%20me%20creas%20un%20usuario?" },
  { numero: "541125127839", mensaje: "hola%20facu,%20me%20podes%20crear%20un%20usuario%20porfa?" },
  { numero: "541123365501", mensaje: "hola%20me%20creas%20un%20usuario?%20🤚🍀" }
];

let index = 0; // empieza en el primero

// Endpoint que devuelve el número actual y avanza al siguiente
app.get("/api/whatsapp", (req, res) => {
  const agente = agentes[index];
  index = (index + 1) % agentes.length; // avanza y cicla
  res.json(agente);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
