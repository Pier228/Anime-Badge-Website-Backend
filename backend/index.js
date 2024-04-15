import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import danceFloorShema from './models/danceFloorShema.js'
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();
const server = express();
server.use(cors({ origin: 'http://localhost:3000' }));
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());

(async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@dancefloor.arxc6wf.mongodb.net/?retryWrites=true&w=majority&appName=danceFloor`, { dbName: 'dance_floor' }
        );
        server.listen(process.env.PORT, () => {
            console.log(
                `Server started on http://localhost:${process.env.PORT}`
            );
        });
    } catch (error) {
        console.log(error);
    }
})();


server.get('/api/getData', async (req, res) => {
    const danceFloorCharacters = await danceFloorShema.find();
    res.send(danceFloorCharacters);
})

server.post('/api/postData', async (req, res) => {
    const character = new danceFloorShema({
        name: req.body.name,
        src: req.body.src,
    })
    try {
        const isExist = await danceFloorShema.findOne({ name: character.name }).exec();
        if (isExist) {
            throw new Error('Character with this name already exist!');
        }
        
        await character.save();
        res.status(200).send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error });
    }
})
