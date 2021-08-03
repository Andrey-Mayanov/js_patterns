import ICircle from "./ICircle";

export default class GreenCircle implements ICircle {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi = (): void => console.log(`Hello world from a green circle - ${this.name}!`);
}