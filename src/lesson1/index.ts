// const asd = (name:string) => {
//     name.slice()
// }
//
// const ads = (names:string[]) => {
//     names[0]
// }
//
// const dsa = (names:string[]):void => {
//     names[0]
// }
//
// const qwe = (names:string[]):number => {
//     names[0]
// }

// const weq = (names:string[], house:number, flat:number):number => {
//     console.log(names[0]);
//     return
// }

// weq(['name', 'max'], 26, 30)
// interface IUser {
//     name:string,
//     age?:number,
//     house:number
// }
//
// const user:IUser = {name: 'Max', age: 23, house: 10}

interface IUser<T> {
    name:string,
    age?:number,
    house:number,
    data:T
}

// const user:IUser<number[]> = {name:'kokos', age: 20, house:12, data:[12, 13, 13]}

const user:IUser<string> = {name:'davi', age:18, data:'soba', house:10}

console.log(user);

class User {
    // name:string;
    // age:number;
    // status:boolean;

    constructor(private _name: string, private _age: number, private _status: boolean) {
        // this.name = name;
        // this.age = age;
        // this.status = status;
    }
    // getName():void{
    //     this._name;
    // }

     getName():string{
        return this._name
    }
    setName(name:string):void{
        this._name = name;
    }
}

const user1 = new User('max', 10, true)
// console.log(user1.name);

console.log(user1.getName());
user1.setName('Boris')
console.log(user1.getName());

const users:User[] =[
    new User('kesha', 12, true),
    new User('kesha', 12, true),
    new User('kesha', 12, true),
    new User('kesha', 12, true)
]

abstract class Shape {
    abstract perimeter():number
    abstract area():number
}

class Rectangle extends Shape {
    constructor(private a:number, private b:number) {
        super();
    }
    perimeter(): number {
        return (this.a + this.b)*2


    }
    area(): number {
        return (this.a * this.b)
    }
}

class Triangle extends Shape{
    constructor(private a:number, private b:number, private c:number) {
        super();
    }
    perimeter(): number {
        return this.a + this.b + this.c;
    }
    area(): number {
        return this.c * this.b / this.a * 2
    }

}

const shapes:Shape[] = [
    new Rectangle(2, 5),
    new Rectangle(5, 8),
    new Triangle(1, 5, 7)
]

for (const shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimeter());
}