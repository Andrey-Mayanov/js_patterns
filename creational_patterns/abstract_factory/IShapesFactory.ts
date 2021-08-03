import ICircle from "./circle/ICircle";
import ITriangle from "./triangle/ITriangle";

export default interface IShapesFactory {
    createA: (name: string) => ICircle;
    createB: () => ITriangle;
}