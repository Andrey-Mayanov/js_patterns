import IShape from "./IShape";

export default class Triangle implements IShape {
    identify_yourself = () => console.log("I'm Triangle");
}