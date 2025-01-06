import fastify from "fastify";
import { createList } from "../routes/create-list";
import { ListAllLists } from "../routes/list-all-list";
import { AddProtucts } from "../routes/add-product";
import { DeleteProduct } from "../routes/delet-product";
import { GetListById } from "../routes/get-list-by-id";

const app = fastify({ logger:true })

app.get('/', async (request, reply) => {
    return { "hello":"Ola, testando server!" }
})

app.register(createList)
app.register(ListAllLists)
app.register(AddProtucts)
app.register(DeleteProduct)
app.register(GetListById)

app.listen({ port: 3001 })
