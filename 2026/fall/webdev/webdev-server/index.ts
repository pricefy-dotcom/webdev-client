import express from "express";
import Hello from "./Hello";
import Lab5 from "./Lab5";
const app = express();
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);