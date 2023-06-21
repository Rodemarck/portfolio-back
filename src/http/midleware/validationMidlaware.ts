import Validator from 'validatorjs';
import {DB} from "../../database/db.ts";
import {NextFunction} from "express";
import {TypedRequest} from "../../helper/typedRequest.ts";
import {loggerErr} from "../../helper/logger.ts";
import {returnJson} from "../../helper/http/returnJson.ts";

interface Regra{
    fields:string[][],
    rules:{
        [fieldName:string]:string
    }
}
interface Regras{
    [field:string]:Regra;
};

const regras_validacao:Regras = {
    login:{
        fields:[['body','login'],['body','password']],
        rules :{
            login : 'required|string|between:4,64',
            password : 'required|string|between:3,64|regex:/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/'
        }
    }
}

const traducao = {
    required:'O campo :attribute é obrigatorio.',
    string:'O campo :attribute precisa ser do tipo texto',
    numeric:'O campo :attribute precisa ser do tipo numérico',
    min:'O campo :attribute possúi um tamanho mínimo de :min'
}


const recupera_erros = (validator:Validator.Validator<any>) => {
    let erros:{[key:string]:any} = {}
    for (let erro in validator.errors.errors) {
        erros[erro] = validator.errors.first(erro);
    }
    return erros;
}
const recupera_dados = (campos:string[][],req:any) => {
    let dados:{[field:string]:any} = {}
    for (let i = 0; i < campos.length; i++) {
        switch (campos[i][0]) {
            case 'body':
                dados[campos[i][1]] = req.body[campos[i][1]]
                break
            case 'query':
                dados[campos[i][1]] = req.query[campos[i][1]]
        }
    }
    return dados
}
export const validation = (...regras:string[]) => {
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

    return (req:Request, res:Response, next:NextFunction) => {

        let regras :{[key:string]:string}={}
        Object.values(conjunto_regras)
            .map((regra:Regra)=>regra.rules)
            .forEach((obj)=>{
                Object.keys(obj).forEach(key=>{
                    regras[key] = obj[key]
                })
            })
        let dados = recupera_dados(campos,req)
        let validador = new Validator(dados, regras, traducao)
        validador.checkAsync(() => next(), () => {
            let erros = recupera_erros(validador)
            loggerErr.error(`erro na validação`)
            returnJson({
                data:{
                    error:{
                        error:{validation:erros},
                        code:400,
                        message:"Bad request"
                    }
                },req,res,next})
        })
    }
}