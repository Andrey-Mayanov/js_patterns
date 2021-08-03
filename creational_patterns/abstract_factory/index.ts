import IShapesFactory from "./IShapesFactory";
import GreenEntity from "./GreenEntity";
import RedEntity from "./RedEntity";

function client (factory: IShapesFactory, name: string): void {
    const a = factory.createA(name);
    const b = factory.createB();

    a.sayHi();
    b.sayBy();
}

console.log("======NiceEntity======");
client(new GreenEntity(), "Bob");
console.log("======BadEntity======");
client(new RedEntity(), "Rob");
