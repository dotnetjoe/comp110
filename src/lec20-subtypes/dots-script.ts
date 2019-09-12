import "introcs";
import { SVG, Group, Circle, Color } from "introcs/graphics";

class Dot extends Circle {

    age: number = 0;

    constructor(cx: number, cy:number) {
        super(30, cx, cy);
        this.fillRandom();
    }

    fillRandom(): void {
        this.fill = new Color(Math.random(), Math.random(), Math.random());
    }

    update(): void {
        this.age += 1;
        if (this.age % 60 === 0) {
            this.fillRandom();
        }
        this.fillRandom();
    }    
}

class GrowingDot extends Dot {
    update(): void {
        super.update();
        this.r = 30 + (this.age % 30);
    }
}

class MovingDot extends GrowingDot {
    update(): void {
        super.update();
        if (this.age % 60 === 0) {
            this.cx += (Math.random() * 50 - 25);
            this.cy += (Math.random() * 50 - 25);
        }
    }
}

// Global Vars
let scene: Group;

function main(): void {
    scene = initScene();
    window.onclick = function(event: MouseEvent): void {
        let dot: Dot;
        let r: number = random(0, 2);
        if (r === 0) {
            dot = new MovingDot(event.clientX, event.clientY);
        } else if (r === 1) {
            dot = new GrowingDot(event.clientX, event.clientY);
        } else {
            dot = new Dot(event.clientX, event.clientY);
        }
        scene.add(dot);
    };

    setInterval(tick, 1000 / 60);
}
import { SVGElement } from "introcs/graphics";
function tick(): void {
    for (let i: number = 0; i < scene.children.length; i++) {
        let child: SVGElement = scene.children[i];
        if (child instanceof Dot) {
            child.update();
        }
    }
}

/**
 * initScene establishes the connection to the HTML's
 * SVG tag with an id of artboard and returns a Group
 * that is rendered to the SVG tag.
 */
function initScene(): Group {
    let svgTag: SVG = new SVG("artboard");
    svgTag.autoScale = false;
    scene = new Group();
    svgTag.render(scene);
    return scene;
}

main();