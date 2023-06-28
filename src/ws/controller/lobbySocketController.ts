import {Socket} from "socket.io";
import {logger} from "../../helper/logger.ts";

const onUserMove = async (socket:Socket)=>{}
const onUserChangeVisibility = async (socket:Socket, data: any  ) =>{
    logger.debug(socket.id)
    socket.emit('piq/client/resposta',data)
}
const onUserStartCreateRoom = async (socket:Socket) =>{}
const onUserCreteRoom = async (socket:Socket) =>{}
const onUserUpdateRoom = async (socket:Socket)=>{}
const onUserDestroyRoom = async (socket:Socket)=>{}
const onUserEnterRoom = async (socket:Socket) =>{}
const onUserExitRoom = async (socket:Socket) =>{}

const onUserReadyInRoom = async (socket:Socket) =>{}
const onUserUnreadyInRoom = async (socket:Socket) =>{}
const onUserStartInRoom = async (socket:Socket) =>{}
const onUserAbortInRoom = async (socket:Socket) =>{}
const onUserAddFriend = async (socket:Socket)=>{}
const onUserAcceptFriend = async (socket:Socket) =>{}
const onUserDeclineFriend = async (socket:Socket) =>{}
const onUserRemoveFriend = async (socket:Socket) =>{}
const onUserUpdateViewSettings = async (socket:Socket) =>{}
const onUserUpdateAudioSettings = async (socket:Socket) =>{}
const onUserUpdateGameSettings = async (socket:Socket) =>{}
const onUserUpdateListSettings = async (socket:Socket) =>{}

export const lobbySocketController = {
    onUserMove,
    onUserChangeVisibility,
    onUserStartCreateRoom,
    onUserCreteRoom,
    onUserUpdateRoom,
    onUserDestroyRoom,
    onUserEnterRoom,
    onUserExitRoom,
    onUserReadyInRoom,
    onUserUnreadyInRoom,
    onUserStartInRoom,
    onUserAbortInRoom,
    onUserAddFriend,
    onUserAcceptFriend,
    onUserDeclineFriend,
    onUserRemoveFriend,
    onUserUpdateViewSettings,
    onUserUpdateAudioSettings,
    onUserUpdateGameSettings,
    onUserUpdateListSettings
}
