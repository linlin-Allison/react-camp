export default class Person {
    constructor(name){
        this._name = name;
    }
    sayHi(){
        return `${this._name} says hi`;
    }
}