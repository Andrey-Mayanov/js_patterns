import IShapesFactory from "./IShapesFactory";
import GreenEntity from "./GreenEntity";
import RedEntity from "./RedEntity";

function client (factory: IShapesFactory, name: string): void {
    const circle = factory.createCircle(name);
    const triangle = factory.createTriangle();

    circle.sayHi();
    triangle.sayBy();
}

console.log("======NiceEntity======");
client(new GreenEntity(), "Bob");
console.log("======BadEntity======");
client(new RedEntity(), "Rob");
