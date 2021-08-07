import OnlyCircle from "./OnlyCircle";

const circle1 = OnlyCircle.getCircle();
const circle2 = OnlyCircle.getCircle();

if (circle1 === circle2) {
    console.log("There is only one circle.");
} else {
    console.log("There is not only one circle.");
}
