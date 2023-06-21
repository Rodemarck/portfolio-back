import {createSocketIoRouter} from "../../helper/socket/SocketIORouter.ts";
import {messageSocketController as controller} from "../controller/messageSocketController.ts";
import {Socket} from "socket.io";

const router = createSocketIoRouter()

router.on('/room/type',controller.onUserTypingInRoom)
router.on('/room/send',controller.onUserTypingInRoom)
router.on('/channel/type',controller.onUserTypingInChannel)
router.on('/channel/send',controller.onUserTypingInChannel)
router.on('/private/type',controller.onUserTypingInPrivate)
router.on('/private/send',controller.onUserTypingInPrivate)
export const messageSocketRouter =  (socket:Socket,prefix:string)=> {
    let _prefix = `${prefix}/message`
    router.register(socket,_prefix)
}