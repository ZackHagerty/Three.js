import Sizes from './utils/Sizes.js';

export default class App 
{
    constructor(canvas)
    {
        window.experience = this;
        this.canvas = canvas;

        this.sizes = new Sizes();
    }
}