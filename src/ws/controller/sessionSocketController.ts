import {createSocketIoRouter} from "../../helper/socket/SocketIORouter";
import {Socket} from "socket.io";

const onUserConnect = async (socket:Socket)=>{}
const onUserDisconnect = async (socket:Socket) =>{}
const onUserReconnect = async (socket:Socket) =>{}
export const sessionSocketController = {
    onUserConnect,
    onUserReconnect,
    onUserDisconnect
}