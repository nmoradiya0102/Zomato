const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes")
const config = require("./config/config");
require("./helpers/crons");
const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(cors());
app.options("*" , cors());

app.use("/v1" , routes);

/** Get image */
// app.use(express.static(`./public`));

app.use((req , res , next) => {
    next(new Error("Route not found..!"));
});

// database connection
connectDB();

// create a server using http
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("Server listning port number " + config.port);
});