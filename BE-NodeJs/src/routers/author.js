import express from "express"
import { Signin, Signup } from "../controls/author";

const routerAt=express.Router();

routerAt.post("/signup",Signup);
routerAt.post("/signin",Signin);

export default routerAt;