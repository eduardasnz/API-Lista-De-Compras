import { FastifyInstance } from "fastify";
import z from "zod";
import { prismaClient } from "../prisma";

export async function GetListById(app: FastifyInstance) {
    
    const listSchema = z.object({
        listId: z.string().uuid()
    }) 

    app.get('/list/:listId', async (req, res) => {

        const { listId } = listSchema.parse(req.params)

        const list = await prismaClient.list.findFirst({
            where:{
                id: listId
            }
        })

        return res.status(200).send(list)
    })
}