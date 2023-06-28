import {Socket} from "socket.io";
import {Regra, Regras} from "../../helper/regras.ts";
import {NextFunction} from "express";
import Validator from "validatorjs";
import {logger, loggerErr} from "../../helper/logger.ts";
import {returnJson} from "../../helper/http/returnJson.ts";
import {recupera_dados, recupera_erros, traducao} from "../../http/midleware/validationMidlaware.ts";

const regras_validacao:Regras = {
    sexo:{
        fields:[['parceiro']],
        rules:{
            parceiro:'required|string|between:4,64'
        }
    }
}


export const validationSocket = (...regras:string[]) => {
    logger.debug("configurando validador")
    let conjunto_regras:Regras = {}
    let campos:string[][] = []
    for (let i = 0; i < regras.length; i++) {
        if(typeof regras[i] === 'string'){
            if(!(regras[i] in regras_validacao))
                continue
            let regra:Regra = regras_validacao[regras[i]]
            campos.push(...regra.fields)
            conjunto_regras = Object.assign({},conjunto_regras,regra.rules)
        }
    }
    return (socket:Socket, data:any, funcs:Function[]) => {
        const next = funcs.shift() ?? (()=>{})

        let dados = recupera_dados(campos,data[0])
        // @ts-ignore
        let validador = new Validator(dados, conjunto_regras, traducao)
        validador.checkAsync(() => {next(socket,data,funcs)}, () => {
            let erros = recupera_erros(validador)
            socket.emit('piq/client/erro',erros)
        })
    }
}
