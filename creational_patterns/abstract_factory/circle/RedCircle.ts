import ICircle from "./ICircle";

export default class RedCircle implements ICircle {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    sayHi = (): void => console.log(`I'm a red circle - ${this.name}!!!`);
}