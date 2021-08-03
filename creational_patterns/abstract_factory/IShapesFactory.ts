import ICircle from "./circle/ICircle";
import ITriangle from "./triangle/ITriangle";

export default interface IShapesFactory {
    createCircle: (name: string) => ICircle;
    createTriangle: () => ITriangle;
}