import ITypeA from "./ITypeA";

export default class BadA implements ITypeA {
    name: string;
    constructor(name: string){
        this.name = name
    }
    say_hi = (): void => console.log(`Get out of ${this.name}!!!`)
}