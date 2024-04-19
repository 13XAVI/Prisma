import { Prisma, PrismaClient } from "@prisma/client";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dot } from "node:test/reporters";
dotenv.config()

const app = express()
app.use(express.json());
app.use(cors());
const Port = process.env.PORT
const prisma = new PrismaClient()

app.listen(Port, () => {
    console.log(`Server listening at ${Port}`);
});
    
app.get('/jobs', async(req: express.Request, res: express.Response) => {
    try {
        const jobs = await prisma.job.findMany()
        res.status(200).json(jobs)
    } catch (error) {
        console.error("Error retrieving jobs:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/jobs/:id', async(req: express.Request, res: express.Response) => {
    try {
        const id = parseInt(req.params.id)
        const job = await prisma.job.findUnique({
            where: { id: id }
        })

        if (!job) {
            res.status(404).json({ error: "Job not found" });
            return;
        }

        res.status(200).json(job)
    } catch (error) {
        console.error("Error retrieving job:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
