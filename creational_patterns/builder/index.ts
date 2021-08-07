import CircleBuilder from "./CircleBuilder";
import Director from "./Director";

function clientCode(director: Director) {
    const builder = new CircleBuilder;
    director.setBuilder(builder);

    console.log("Colored:");
    director.buildColoredCircle();
    builder.getCircle().getSetting();

    console.log("Colored and big:");
    director.buildColoredAndBigCircle();
    builder.getCircle().getSetting();
}

const director = new Director();
clientCode(director);