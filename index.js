const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { router } = require("./routes/routes");
const MONGOURI = require("./config/keys").mongoURI;
const PORT = process.env.PORT || 4200;
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(MONGOURI, { useNewUrlParser: true})
    .then(() => console.log("Conectado a MongoDB 🚀"))
    .catch((err) => console.log(err));

app.use("/", router);

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
});