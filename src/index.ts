import express from 'express'
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import RedisStore from "connect-redis"
import session from "express-session"
import {createClient} from "redis"
import router from "./http/router/router.ts";

import * as http from "http";
import {Server} from "socket.io";
import {socketRouter} from "./ws/router/socketRouter.ts";
import {initDatabase} from "./database/db.ts";

import { engine } from 'express-handlebars';
import {initSession} from "./initSession.ts";



dotenv.config()
const __db  =initDatabase()
const app = express();

initSession(app)

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './view');
app.use(cors());
app.use(express.static('./public'));
app.use(express.json());
app.use(cookieParser());


const server = http.createServer(app)
const io = new Server(server)
socketRouter(io)
router(app)
server.listen(process.env.port,async ()=>{
    await __db
    console.log(`ouvindo na porta ${process.env.port}`)
})
//export default app;
