import ITypeA from "./ITypeA";

export default class NiceA implements ITypeA {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    say_hi = (): void => console.log(`Hello world from ${this.name}!`)
}