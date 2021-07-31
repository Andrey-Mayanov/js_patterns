import ShapeCreator from "./ShapeCreator";
import IShape from "../shapes/IShape";
import Triangle from "../shapes/Triangle";

export default class TriangleCreator extends ShapeCreator{
    factoryMethod = (): IShape => new Triangle();
}