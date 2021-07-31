import IShape from "./IShape";

export default class Circle implements IShape {
    identify_yourself = () => console.log("I'm Circle");
}