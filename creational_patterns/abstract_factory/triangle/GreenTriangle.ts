
import ITriangle from "./ITriangle";

export default class GreenTriangle implements ITriangle {
    getType = (): string => "NiceB";
    sayBy = (): void => console.log("Have a nice day from a Green Triangle!");
    ;
}