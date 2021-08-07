import Circle from "./Circle";
import IBuilder from "./IBuilder";

export default class CircleBuilder implements IBuilder {
    private circle!: Circle;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.circle = new Circle();
    }

    setColor(): void {
        this.circle.color = "red";
    }

    setSize(): void {
        this.circle.size = 15;
    }

    public getCircle(): Circle {
        const result = this.circle;
        this.reset();
        return result;
    }
}