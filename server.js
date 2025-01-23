require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const moovieRouter = require("./routers/movieRouter")
const errorsHandler = require("./middlewware/errorsHandler");
const notFound = require("./middlewware/notFound");
const PORT = process.env.port || 3000;

//middleware
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

console.log('ciao');
app.get("/", (req, res) => {
    console.log('dsa');
    res.send('Hello World!')
});
app.use("/api/movie", moovieRouter);

app.use(notFound);
app.use(errorsHandler);

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
