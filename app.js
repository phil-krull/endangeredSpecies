const express = require("express");
const bodyParser = require("body-parser");
const PORT = 8888;
const app = express();

app.use(bodyParser.json());

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}!`);
})