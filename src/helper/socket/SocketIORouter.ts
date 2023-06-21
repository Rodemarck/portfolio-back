import {Socket} from "socket.io";

export interface SocketIoRouter {
    routes: any[];
    on: (path: string, ...func: Function[]) => void;
    register: (socket:Socket, prefix:string) => void;
}
export const createSocketIoRouter = ():SocketIoRouter=>{
    return {
        routes:[],
        on:function(path:string, ...func:Function[]){
            this.routes.push({path,func})
        },
        register:function(socket:Socket, prefix:string){
            this.routes.forEach(route=>{
                socket.on(`${prefix}${route.path}`, async()=>{
                    let funcs = JSON.parse(JSON.stringify(route.func));
                    let func = funcs.shift()
                    await func(socket,funcs)}
                )
            })
        }
    }
}