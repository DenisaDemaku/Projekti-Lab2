import { Router } from "express";
import { BrandModel } from "../schemas/Brand.schema";

export const BrandController = Router();

/**
 * GET REQUESTS
 */
BrandController.get('/', async (_req, res, next) => {
    try {
        const brands = await BrandModel.find();

        res.status(200).send(brands);
    } catch (err) {
        next(err);
    }
})

/**
 * POST REQUESTS
 */
BrandController.post('/', async (req, res, next) => {
    try {
        const { body } = req;
        const brands = new BrandModel(body);

        res.status(200).send(await brands.save());
    } catch (err) {
        next(err);
    }
})
