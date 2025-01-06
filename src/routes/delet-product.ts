import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prismaClient } from "../prisma";

export async function DeleteProduct(app: FastifyInstance) {
    
    const ProductsSchema = z.object({
        productId: z.string().uuid()
    })

    app.delete('/remove-product', async (req, res) => {
        const {productId} = ProductsSchema.parse(req.body)

        const remove = await prismaClient.item.delete({
            where: {
                id: productId
            }
        })

        return res.status(200).send({
            message: 'produto removido!',
            remove
        })
    })

}