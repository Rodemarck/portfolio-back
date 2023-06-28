import {Socket} from "socket.io";

export const makeCard = (length:number = 32) :string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

interface SocketMemory{
    [sessionCard:string]:{
        socket?:Socket,
        
    }
}

export const socketData = {

}
class SocketData{
    memory:SocketMemory
    constructor() {
        this.memory = {}
    }
}