import ShapeCreator from "./ShapeCreator";
import Circle from "../shapes/Circle";
import IShape from "../shapes/IShape";

export default class CircleCreator extends ShapeCreator{
    factoryMethod = (): IShape => new Circle();
}