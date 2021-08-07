import IBuilder from "./IBuilder";

export default class Director {
    private builder!: IBuilder;

    public setBuilder(builder: IBuilder): void {
        this.builder = builder;
    }

    public buildColoredCircle(): void {
        this.builder.setColor();
    }

    public buildColoredAndBigCircle(): void {
        this.builder.setColor();
        this.builder.setSize();
    }
}