import ITypesFactory from "./ITypesFactory";
import NiceEntity from "./NiceEntity";
import BadEntity from "./BadEntity";

function client (factory: ITypesFactory, name: string): void {
    const a = factory.create_a(name);
    const b = factory.create_b();

    a.say_hi();
    b.say_by();
}

console.log("======NiceEntity======");
client(new NiceEntity(), "Nice A");
console.log("======BadEntity======");
client(new BadEntity(), "Bad A");
