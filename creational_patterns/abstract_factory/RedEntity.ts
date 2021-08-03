import ITypesFactory from "./IShapesFactory";
import ICircle from "./circle/ICircle";
import RedCircle from "./circle/RedCircle";
import ITriangle from "./triangle/ITriangle";
import RedTriangle from "./triangle/RedTriangle";

export default class RedEntity implements ITypesFactory{
    createCircle = (name: string): ICircle => new RedCircle(name);
    createTriangle = (): ITriangle => new RedTriangle();
    
}