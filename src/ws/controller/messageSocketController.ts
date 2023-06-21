import {Socket} from "socket.io";

const onUserTypingInRoom = async (socket:Socket) =>{}
const onUserTypingInChannel = async (socket:Socket) =>{}
const onUserTypingInPrivate = async (socket:Socket) =>{}
const onUserSendMessageInRoom = async (socket:Socket) =>{}
const onUserSendMessageInChannel = async (socket:Socket) =>{}
const onUserSendMessageInPrivate = async (socket:Socket) =>{}
export const messageSocketController = {
    onUserTypingInRoom,
    onUserTypingInChannel,
    onUserTypingInPrivate,
    onUserSendMessageInRoom,
    onUserSendMessageInChannel,
    onUserSendMessageInPrivate
}