import { FastifyInstance } from "fastify";
import z from "zod";
import { prismaClient } from "../prisma";

export async function AddProtucts(app: FastifyInstance) {

    const ProductsSchema = z.object({
        productName: z.string().min(1, 'necessario!'),
        measure: z.string().min(1, 'necessario!'),
        quantity: z.number().positive().int().min(1),
        listID: z.string().uuid()
    })
    
    app.post('/add-product', async (req, res) => {

        const { productName, measure, quantity, listID } = ProductsSchema.parse(req.body)

        const product = await prismaClient.item.create({
            data: {
                productName,
                measure,
                quantity,
                listID
            }
        })
        return res.status(201).send({
            message: 'produto adicionado!', product
        })
    })

}