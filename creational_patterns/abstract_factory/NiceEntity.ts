import ITypesFactory from "./ITypesFactory";
import ITypeA from "./type_a/ITypeA";
import NiceA from "./type_a/NiceA";
import ITypeB from "./type_b/ITypeB";
import NiceB from "./type_b/NiceB";

export default class NiceEntity implements ITypesFactory {
    create_a = (name: string): ITypeA => new NiceA(name);
    create_b = (): ITypeB => new NiceB();
}