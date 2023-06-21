import {NextFunction, Request} from "express";
import {logger, loggerErr} from "../logger.ts";
import {TypedRequest, TypedResponse} from "../typedRequest.ts";

export enum RequestMethods{
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}
export enum ContentType{
    JSON = 'json',
    FORM = 'form'
}
interface RequestParams {
    method:RequestMethods;
    cType:ContentType;
    headers?:[string,string]
    data?:any,
    error?:any
}
const content_type = {
    form:'application/x-www-form-urlencoded;charset=UTF-8',
    json:'application/json;charset=UTF-8'
}
export const doRequest = async (url:string, opt:RequestParams)=>{
    if(opt.error)
        return {error:opt.error};
    try{
        logger.debug(`fetch em ${url}`);
        let response = await fetch(url,{
            method:opt.method,
            headers:[opt.headers??['','']]
        });
        if (!response.ok) {
            let err
            try{
                err = await response.json()
                err.code = response.status
                loggerErr.error(`status : ${response.status} fetch em ${url}`);
                logger.debug('erro 1')
            }catch (e) {
                logger.debug('erro 2')
                throw {code: response.status};
            }
            logger.debug('erro 3')
            throw err;
        }
        let json = await response.json();
        if(json.error)
            return {
                error:{
                    code:response.status,
                    error:json.error
                }
            };
        return json;
    }catch (e) {
        loggerErr.error(e)
        logger.debug('realmente deu erro')
        return {error:e}
    }
}

interface JsonParams{
    data?:any;
    req:any;
    res:any;
    next?:any;
    filter?:any
}
export const returnJson = (params:JsonParams ) => {
    if(params.data.error) {
        params.res.status(params.data.error.code??500)
            .send(params.data.error)
    }
    else {
        if(params.filter)
            params.res.status(200)
                .send(params.filter(params.data))
        else
            params.res.status(200)
                .send(params.data)
    }
}