export default class Circle {
    color?: string;
    size?: number;

    getSetting = (): void => {
        console.log(`Color: ${this.color}`);
        console.log(`Size: ${this.size}`);
    }
}