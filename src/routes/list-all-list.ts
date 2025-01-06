import { FastifyInstance } from "fastify";
import { prismaClient } from "../prisma";

export async function ListAllLists(app:FastifyInstance) {
    
    app.get('/lists', async (req, res) => {

        const lists = await prismaClient.list.findMany({
            include: {
                items: true
            }
        })

        return res.send(lists)
    })

}