import "dotenv/config"
import express from "express";
import cors from "cors";
import { Prisma, PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors({origin: '*'})) // localhost na porta 3001 pode acessar o servidor.
app.use(express.json({limit: "5mb"}));

app.post('/saveSearch', async (req, res) => {
    await prisma.history.create({
        data: {
            artist: req.body.artist,
            music: req.body.music,
            lyrics: req.body.lyrics,
        }
    })
    res.json({sucess: true});
});

app.listen(1234, () => {
    console.log("servidor online!");
});
