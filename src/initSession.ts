import {Express} from "express";
import {createClient, RedisClientType} from "redis";
import RedisStore from "connect-redis";
import session from "express-session";
import {logger} from "./helper/logger.ts";
const _data:any = {};
export const redis = () => _data.redis
export const initSession = async (app:Express)=>{
    let redis_port:number = Number(process.env.REDIS_PORT) ?? 6379
    let user= process.env.REDIS_USER
    let pass = process.env.REDIS_PASS
    let host = process.env.REDIS_HOST
    let port = process.env.REDIS_PORT
    let url = `redis://${user}:${pass}@${host}:${port}`
    logger.debug(url)
    _data.redis = createClient({
        url
    })
    redis().connect().catch(console.error)


// Initialize store.
    const redisStore = new RedisStore({
        client: redis,
        prefix: "myapp:",
    })
    redis().set("viado","zé da manga")
    app.use(
        session({
            name: 'PIQ',
            store: redisStore,
            resave: false, // required: force lightweight session keep alive (touch)
            saveUninitialized: false, // recommended: only save session when data exists
            secret: process.env.SV_SECRET ?? 'Uma senha para o meu PIQ',
            cookie:{
                secure: false,
                maxAge:3600000
            }
        })
    )
}