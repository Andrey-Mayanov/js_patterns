import ITypesFactory from "./IShapesFactory";
import ICircle from "./circle/ICircle";
import RedCircle from "./circle/RedCircle";
import ITriangle from "./triangle/ITriangle";
import RedTriangle from "./triangle/RedTriangle";

export default class RedEntity implements ITypesFactory{
    createA = (name: string): ICircle => new RedCircle(name);
    createB = (): ITriangle => new RedTriangle();
    
}