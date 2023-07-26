import express from "express";
import { addPr, getAllPr, removePr, updatePr } from "../controls/products";

const router=express.Router();

router.get(`/products`,getAllPr);
router.post(`/products`,addPr);
router.put(`/products/:id`,updatePr);
router.delete(`/products/:id`,removePr);


export default router;