import ITypesFactory from "./ITypesFactory";
import ITypeA from "./type_a/ITypeA";
import BadA from "./type_a/BadA";
import ITypeB from "./type_b/ITypeB";
import BadB from "./type_b/BadB";

export default class BadEntity implements ITypesFactory{
    create_a = (name: string): ITypeA => new BadA(name);
    create_b = (): ITypeB => new BadB();
    
}