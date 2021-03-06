import ITypesFactory from "./IShapesFactory";
import ICircle from "./circle/ICircle";
import GreenCircle from "./circle/GreenCircle";
import ITriangle from "./triangle/ITriangle";
import GreenTriangle from "./triangle/GreenTriangle";

export default class NiceEntity implements ITypesFactory {
    createCircle = (name: string): ICircle => new GreenCircle(name);
    createTriangle = (): ITriangle => new GreenTriangle();
}