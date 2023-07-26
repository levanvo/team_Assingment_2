import SchemaProducts from "../models/products";
import joi from "joi";

const JoiProducts = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    quantity: joi.number().required(),
});

export const getAllPr = async (req, res) => {
    try {
        const data = await SchemaProducts.find();
        return res.status(200).json({ message: "getAllPr products ===>", data });
    } catch (error) {
        return res.status(400).json({ message: "getAllPr failed ===>", error });
    };
};
export const addPr = async (req, res) => {
    try {
        const body = req.body;
        // validate
        const { error } = await JoiProducts.validate(body);
        if (error) { return res.json(error.details[0].message) };
        // add
        const data = await SchemaProducts.create(body);
        return res.status(200).json({ message: "addPr one products ===>", data });
    } catch (error) {
        return res.status(400).json({ message: "addPr failed ===>", error });
    };
};
export const updatePr = async (req, res) => {
    try {
        const body = req.body;
        // validate
        const { error } = await JoiProducts.validate(body);
        if (error) { return res.json(error.details[0].message) };
        // update
        const data = await SchemaProducts.findByIdAndUpdate(res.params.id,body,{new:true});
        return res.status(200).json({ message: "updatePr one products ===>", data });
    } catch (error) {
        return res.status(400).json({ message: "updatePr failed ===>", error });
    };
};
export const removePr = async (req, res) => {
    try {
        const data = await SchemaProducts.findByIdAndDelete(res.params.id);
        return res.status(200).json({ message: "removePr one products ===>", data });
    } catch (error) {
        return res.status(400).json({ message: "removePr failed ===>", error });
    };
};