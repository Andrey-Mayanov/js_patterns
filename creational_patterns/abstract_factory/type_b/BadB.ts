import ITypeB from "./ITypeB";

export default class BadB implements ITypeB {
    get_type = (): string => "BadB"
    say_by = (): void => console.log("Get out of B!!!")
}