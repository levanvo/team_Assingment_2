import express from "express";
import { addPr, getAllPr, getOnePr, removePr, updatePr } from "../controls/products";
// import { CheckMission } from "../middles/middle";

const router=express.Router();

router.get(`/products`,getAllPr);
router.get(`/products/:id`,getOnePr)
router.post(`/products`,addPr);//1
router.put(`/products/:id`,updatePr);//2
router.delete(`/products/:id`,removePr);//3

export default router;