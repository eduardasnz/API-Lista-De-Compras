import { z } from "zod";
import {FastifyInstance} from "fastify";
import { prismaClient } from "../prisma";

export async function createList(app:FastifyInstance) {
    
    const listSchema = z.object(
        {
            title: z.string().min(1, 'titulo é obrigatório!')
        })

        app.post('/list', async (req, res) => {

            const { title } = listSchema.parse(req.body)

            const alreadyExists = await prismaClient.list.findFirst({
                where: {
                    title
                }

            })

            if (alreadyExists) {
                return res.status(400).send({
                    message: { error: 'essa lista já existe! '}
                })
            }

            const list = await prismaClient.list.create({
                data: {
                    title
                }
            })

            return res.status(201).send(list)
        })
}