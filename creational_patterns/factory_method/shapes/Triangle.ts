import IShape from "./IShape";

export default class Triangle implements IShape {
    identifyYourself = () => console.log("I'm Triangle");
}