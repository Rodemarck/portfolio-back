import {Socket} from "socket.io";
import {logger} from "../logger.ts";

interface Route{
    path:string,
    funcs:Function[]
}
export interface SocketIoRouter {
    routes:Route[];
    on: (path: string, ...func: Function[]) => void;
    register: (socket:Socket, prefix:string) => void;
}
export const createSocketIoRouter = ():SocketIoRouter=>{
    return {
        routes:[],
        on:function(path:string, ...funcs:Function[]){
            this.routes.push({path,funcs})
        },
        register:function(socket:Socket, prefix:string){
            this.routes.forEach(route=>{
                //logger.info(`${prefix}${route.path}`)
                socket.on(`${prefix}${route.path}`, async(...data)=>{
                    let funcs = Object.assign([],route.funcs)
                    let func = funcs.shift() ?? ((a:any,b:any,c:any)=>{});
                    await func(socket,data,funcs)
                }
                )
            })
        }
    }
}