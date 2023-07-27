import express from "express";
import { addPr, getAllPr, removePr, updatePr } from "../controls/products";
import { CheckMission } from "../middles/middle";

const router=express.Router();

router.get(`/products`,getAllPr);
router.post(`/products`, CheckMission,addPr);
router.put(`/products/:id`, CheckMission,updatePr);
router.delete(`/products/:id`, CheckMission,removePr);

export default router;