import ITypesFactory from "./IShapesFactory";
import ICircle from "./circle/ICircle";
import GreenCircle from "./circle/GreenCircle";
import ITriangle from "./triangle/ITriangle";
import GreenTriangle from "./triangle/GreenTriangle";

export default class NiceEntity implements ITypesFactory {
    createA = (name: string): ICircle => new GreenCircle(name);
    createB = (): ITriangle => new GreenTriangle();
}