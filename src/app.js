import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routers/products";

const app=express();
app.use(express.json());
app.use(cors());
app.use(router);

mongoose.connect(`mongodb://127.0.0.1:27017/Assingment2`)
    .then(()=>console.log(`Connect successful____________________`))
    .catch((err)=>console.log(`Failed connect ------>>> `,err));

export const viteNodeApp=app;