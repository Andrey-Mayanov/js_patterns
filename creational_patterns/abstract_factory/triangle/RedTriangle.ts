import ITriangle from "./ITriangle";

export default class RedTriangle implements ITriangle {
    getType = (): string => "RedTriangle";
    sayBy = (): void => console.log("Get out of a Red Triangle!!!");
}