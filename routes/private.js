import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get('/list-users', async (req,res) => {
    try {
        const users = await prisma.user.findMany({omit:{password: true}});

        res.status(200).json({message: 'Users found successfully!', users})
    } catch(err) {
        res.status(500).json({message: 'Server failure, please try again!'})
    }
});

export default router;