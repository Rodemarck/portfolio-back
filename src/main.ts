import express from 'express'
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import RedisStore from "connect-redis"
import session from "express-session"
import {createClient} from "redis"
import router from "./http/router/router.ts";
dotenv.config()
import * as http from "http";
import {Server} from "socket.io";
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import {socketRouter} from "./ws/router/socketRouter.ts";


const __filename:string = fileURLToPath(import.meta.url);
const __dirname:string = path.dirname(__filename);

const app = express();

let redisClient = createClient()
redisClient.connect().catch(console.error)

// Initialize store.
let redisStore = new RedisStore({
    client: redisClient,
    prefix: "myapp:",
})

// Initialize sesssion storage.
app.use(
    session({
        store: redisStore,
        resave: false, // required: force lightweight session keep alive (touch)
        saveUninitialized: false, // recommended: only save session when data exists
        secret: "keyboard cat",
    })
)

app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.get('/',(a,b,c)=>{})
const server = http.createServer(app)
const io = new Server(server)
socketRouter(io)
router(app)
server.listen(process.env.port,()=>{
    console.log(`ouvindo na porta ${process.env.port}`)
})
//export default app;
