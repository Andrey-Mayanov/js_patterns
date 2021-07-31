import CircleCreator from "./creators/CircleCreator";
import ShapeCreator from "./creators/ShapeCreator";
import TriangleCreator from "./creators/TriangleCreator";

const client = (creator: ShapeCreator): void => creator.iWantToKnowYou();

console.log("====Circle====");
client(new CircleCreator());
console.log("====Triangle====");
client(new TriangleCreator());
