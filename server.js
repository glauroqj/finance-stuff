require("dotenv").config();
const PORT = process.env.PORT;

const Connection = require("./server/db/Connection");
const HttpServer = require("./server/HttpServer");
const LancamentoController = require("./server/controllers/lancamento/LancamentoController");
const LancamentoData = require("./server/db/lancamento/LancamentoData");

const connection = new Connection();
const lancamentoData = new LancamentoData(connection);

const httpServer = new HttpServer();
new LancamentoController(httpServer, lancamentoData);

httpServer.listen(PORT);
