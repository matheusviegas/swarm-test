const express = require("express");
const os = require("os");

const PORT = process.env.PORT || 4444;

const app = express();
app.use(express.json());

app.get("/", async (_, res) => {
  return res.json({ status: "OK", hostname: os.hostname() });
});

app.get("/kill", () => {
  process.exit();
});

app.listen(PORT, () => {
  console.log(`Servidor ouvindo requisições na porta ${PORT}.`);
});