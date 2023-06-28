import {createSocketIoRouter, SocketIoRouter} from "../../helper/socket/SocketIORouter.ts";
import {lobbySocketController as controller} from "../controller/lobbySocketController.ts";
import {Socket} from "socket.io";
import {validationSocket} from "../midlewares/validationSocket.ts";

const router:SocketIoRouter = createSocketIoRouter()

router.on('/visibilty',validationSocket('sexo2'),controller.onUserChangeVisibility)
router.on('/room/create',controller.onUserCreteRoom)
router.on('/room/creating',controller.onUserStartCreateRoom)
router.on('/room/update',controller.onUserUpdateRoom)
router.on('/room/destroy',controller.onUserDestroyRoom)
router.on('/room/enter',controller.onUserEnterRoom)
router.on('/room/ready',controller.onUserReadyInRoom)
router.on('/room/unready',controller.onUserUnreadyInRoom)
router.on('/room/exit',controller.onUserExitRoom)
router.on('/room/start',controller.onUserStartInRoom)
router.on('/room/abort',controller.onUserAbortInRoom)
router.on('/room/move',controller.onUserMove)

router.on('/friend/add',controller.onUserAddFriend)
router.on('/friend/accept',controller.onUserAcceptFriend)
router.on('/friend/decline',controller.onUserDeclineFriend)
router.on('/friend/remove',controller.onUserRemoveFriend)



router.on('/settings/view',controller.onUserUpdateViewSettings)
router.on('/settings/audio',controller.onUserUpdateAudioSettings)
router.on('/settings/game',controller.onUserUpdateGameSettings)
router.on('/settings/list',controller.onUserUpdateListSettings)


export const lobbySocketRouter = (socket:Socket,prefix:string)=> {
    let _prefix = `${prefix}/lobby`
    router.register(socket,_prefix)
}