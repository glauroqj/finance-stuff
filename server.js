const Connection = require("./server/Connection");
const HttpServer = require("./server/HttpServer");
const LancamentoController = require("./server/LancamentoController");
const LancamentoData = require("./server/LancamentoData");

const PORT = process.env.PORT;

const connection = new Connection();
const lancamentoData = new LancamentoData(connection);
const httpServer = new HttpServer();
new LancamentoController(httpServer, lancamentoData);
httpServer.listen(PORT);
