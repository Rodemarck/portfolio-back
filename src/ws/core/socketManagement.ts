import {Socket} from "socket.io";

interface SocketData{
    memory:{
        [sessionCard:string]:{
            socket:Socket
        }
    }
}
export const  SocketManagementer:any = {

}

