export default class OnlyCircle {
    private static instance: OnlyCircle;

    private constructor() {};

    public static getCircle = (): OnlyCircle => {
        if(!OnlyCircle.instance){
            OnlyCircle.instance = new OnlyCircle();
        }
        return OnlyCircle.instance;
    }

    sayHi = () => console.log("Hi");
    
}