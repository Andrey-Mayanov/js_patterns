import ITypeA from "./type_a/ITypeA";
import ITypeB from "./type_b/ITypeB";

export default interface ITypesFactory {
    create_a: (name: string) => ITypeA
    create_b: () => ITypeB
}