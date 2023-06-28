import {createSocketIoRouter} from "../../helper/socket/SocketIORouter";
import {Socket} from "socket.io";

const onUserConnect = (socket:Socket)=>{}
const onUserDisconnect = (reason: any, description?: any) =>{}
const onUserReconnect = (socket:Socket) =>{}
export const sessionSocketController = {
    onUserConnect,
    onUserReconnect,
    onUserDisconnect
}