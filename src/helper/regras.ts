export interface Regra{
    fields:string[][],
    rules:{
        [fieldName:string]:string
    }
}
export interface Regras{
    [field:string]:Regra;
};