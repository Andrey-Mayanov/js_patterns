
import ITypeB from "./ITypeB";

export default class NiceB implements ITypeB {
    get_type = (): string => "NiceB";
    say_by = (): void => console.log("Have a nice day!");
    ;
}