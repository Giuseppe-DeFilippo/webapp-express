const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const bookRouter = require("./routers/movieRouter")
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
app.use("/api/movie", bookRouter);

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
