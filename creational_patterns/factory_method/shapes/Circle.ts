import IShape from "./IShape";

export default class Circle implements IShape {
    identifyYourself = () => console.log("I'm Circle");
}