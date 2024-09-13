// function foo(num){
//
// }
//
// foo(1)

function foo(o:number){

}

foo(12);

// --------------
function foo1(o:number, x:string):string{
    return o + x;
}

foo1(12, 'hello');
// --------------
function foo2(o:number, x?:string){

}
// --------------
function bar(obj:{id: number, name: string}):void{

}
bar({id:1, name:'Alex'})

let num: number = 100;
let s: string = 'abc';
let b: boolean = true;
let obj:{id: number, status: boolean} = {id:1, status:true}

let arrS: string[] = ['asd', 'qwe', 'wed'];
let arrN: number[] = [1, 2, 3]
let arrA: Array<number> = [1, 2, 3, 4, 5]
let arrObj: {name: string, age:number}[] = [
    {name:'alex', age: 23},
    {name:'oleg', age: 25}
]

function asd():{name:string}{
    return {name:'sass'}
}

function divCreator(content: string, domElement:HTMLElement){
    let htmlDivElem:HTMLDivElement = document.createElement('div')
}
divCreator('hello', document.body)

function fetchData():Promise<{id: number, userId: number, title: string, body:string}> {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((value) => value.json())
        .then((users:{id: number, userId: number, title: string, body:string}[]) => {
            return users
        });
}