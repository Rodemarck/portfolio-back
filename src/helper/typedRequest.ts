import { Query,Send } from 'express-serve-static-core';
export interface TypedResponse<ResBody> extends Express.Response {
    json: Send<ResBody, this>;
}
export interface TypedRequest<T extends Query, U> extends Express.Request {
    query: T;
    body: U;
}