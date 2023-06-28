import {lobbySocketRouter} from "./lobbySocketRouter.ts";
import {messageSocketRouter} from "./messageSocketRouter.ts";
import {
    sessionSocketController,
    sessionSocketController as sessionController
} from "../controller/sessionSocketController.ts";
import {Server,Socket} from "socket.io";
import {logger} from "../../helper/logger.ts";

export const SOCKET:{io:Server|undefined, list:Socket[], timeout:number} = {
    io: undefined,
    list:[],
    timeout:25000,
}
export const socketRouter =  (io:Server) =>{
    if(SOCKET.io) return;
    SOCKET.io = io
    io.on('connect',async socket=>{
        logger.debug('ser conectado no socket')
        const prefix = 'piq/server'
        lobbySocketRouter(socket,prefix)
        messageSocketRouter(socket,prefix)

        socket.on('disconnect',sessionController.onUserDisconnect)
        socket.on('reconnecting',sessionSocketController.onUserReconnect)
        await sessionController.onUserConnect(socket)
    })

}