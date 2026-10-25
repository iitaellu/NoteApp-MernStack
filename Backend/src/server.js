import express from "express"; //Type: module in package.json
//const express = require("express"); //tyoe commonjs
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
    console.log("Server started on PORT: 5001")
});