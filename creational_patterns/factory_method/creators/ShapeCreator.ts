import IShape from "../shapes/IShape";

export default abstract class ShapeCreator {
    abstract factoryMethod: () => IShape;

    iWantToKnowYou = (): void => {
        const product = this.factoryMethod();
        product.identifyYourself();
    }
}