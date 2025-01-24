// type 定义类型
type myString = string
type myNumber = number

// type 定义函数
type hello = (msg: string) => void

// type 对象
type WebSite = {
    url: string;
    title: number;
}

// ===============================================

// interface 对象
export interface IDataValue {
    year: string
    value: number
}

// ===============================================

// 变量定义
declare var val1:myString

// 变量类型可以是 字符串 数字
declare var val2:myString | myNumber

// 函数定义
declare function sayHello(msg: string):void

// 重载
declare function sayHello(num: number, logNum:number):void

// 类定义
declare class HtmlMetaTag {
    keywords: string
    description: string    
    constructor(keywords: string, description: string)
}

// ===============================================

// 对象的形式对外暴露，内部成员不需要 `declare`
declare namespace HtmlTag{
    var name: string
    function getTagName(): string

    class Div {
        name: string
        constructor(name: string)
        getName(): string
    }
}

// ===============================================

// 模块形式导出，内部需要 `export` 指定导出对象
declare module "FormInputTag" {
    export let classTag: string
    export let idTag: string
    export let nameTag: string
    export let valueTag: string

    export function getFullTag(): string
}
