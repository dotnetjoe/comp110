// TODO: ADD HONOR PLEDGE HERE
/**    
 * Author: Adam Alston  
 * ONYEN: aalston9
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

// TODO: Import the classes you need to work with your Emoji
import { Group, Color, Text, Circle, Rectangle, Path, Ellipse, Transform } from "introcs/graphics";

export class FaceShape {

    /**
     * The tone of the FaceShape class is a property so that you can
     * easily change the tone of an Emoji (i.e. red FaceShape tone is angry,
     * green sick, etc);
     */
    tone: Color;

    constructor(tone: Color) {
        this.tone = tone;
    }

    shapes(): Group {
        let shapes: Group = new Group();
        // TODO #1: Remove the four lines of code below adding the text "Emoji"
        //          to the shapes group.
        // TODO #2: Import, construct, and add one or more Shape objects to the shapes
        //          group to design your FaceShape.
        let r: Rectangle = new Rectangle(80, 80);
        shapes.add(r);
        // TODO #3: Ensure at least one shape is filled with the
        //          FaceShape's tone Color property. (Requirement A2!)
        r.fill = this.tone;
        return shapes;
    }
}

// TODO: Eye class
export class Eye {
    irisColor: Color;
    shape: Circle;

    constructor(irisColor: Color) {
        this.irisColor = irisColor;
    }

    shapes(): Group {
        let shapes: Group = new Group;
        let c: Circle = new Circle(5);
        c.fill = this.irisColor;
        shapes.add(c);
        return shapes;
    }
}

// TODO: Mouth class
export class Mouth {
    shapes(): Group {
        let shapes: Group = new Group();
        let h: Rectangle = new Rectangle(60, 20);
        shapes.add(h);
        return shapes;
    }
}

export class Nose {
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    shapes(): Group {
        let shapes: Group = new Group;
        let n: Circle = new Circle(3);
        n.fill = this.color;
        shapes.add(n);
        return shapes;
    }
}

export class Unibrow {
    shapes(): Group {
        let shapes: Group = new Group();
        let n: Path = new Path(-35, -35);
        n.quadraticCurveTo(-5, -20, 35, -35);
        shapes.add(n);
        return shapes;
    }
}

export class Teeth {
    shapes(): Group {
        let shapes: Group = new Group();

        let t: Path = new Path(-30, 20);
        let u: Path = new Path(20, 10);
        let v: Path = new Path(10, 10);
        let w: Path = new Path(0, 10);
        let x: Path = new Path(-10, 10);
        let y: Path = new Path(-20, 10);
        let z: Path = new Path(-30, 10);

        t.lineTo(30, 20);
        u.lineTo(20, 30);
        v.lineTo(10, 30);
        w.lineTo(0, 30);
        x.lineTo(-10, 30);
        y.lineTo(-20, 30);
        z.lineTo(-30, 30);

        shapes.add(t);
        shapes.add(u);
        shapes.add(v);
        shapes.add(w);
        shapes.add(x);
        shapes.add(y);
        shapes.add(z);

        return shapes;
    }
}

export class Hat {
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    shapes(): Group {
        let shapes: Group = new Group;
        let cover: Rectangle = new Rectangle(90, 20);
        let bill: Rectangle = new Rectangle(110, 5);
        cover.fill = this.color;
        bill.fill = this.color;
        bill.transform = bill.transform.translate(-20, 15);
        shapes.add(cover);
        shapes.add(bill);
        return shapes;
    }
}

export class Hair {
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    shapes(): Group {
        let shapes: Group = new Group;
        let leftHair: Rectangle = new Rectangle(5, 15);
        let rightHair: Rectangle = new Rectangle(5, 15);
        leftHair.fill = this.color;
        rightHair.fill = this.color;
        shapes.add(leftHair);
        shapes.add(rightHair);
        return shapes;
    }
}

// TODO: Emoji class
export class Emoji {
    faceShape: FaceShape;
    mouth: Mouth;
    nose: Nose;
    leftEye: Eye;
    rightEye: Eye;
    unibrow: Unibrow;
    teeth: Teeth;
    hat: Hat;
    leftHair: Hair;
    rightHair: Hair;

    constructor() {
        this.faceShape = new FaceShape(new Color(.5, .5, .5));
        this.mouth = new Mouth();
        this.nose = new Nose(new Color(0, 1, 0));
        this.leftEye = new Eye(new Color(0, 0, 1));
        this.rightEye = new Eye(new Color(1, 0, 0));
        this.unibrow = new Unibrow();
        this.teeth = new Teeth;
        this.hat = new Hat(new Color(.6, .729, .95));
        this.leftHair = new Hair(new Color(0, 0, 0));
        this.rightHair = new Hair(new Color(0, 0, 0));
        
    }

    shapes(): Group {
        let shapes: Group = new Group;
        let faceShape: Group = this.faceShape.shapes();
        let mouth: Group = this.mouth.shapes();
        let nose: Group = this.nose.shapes();
        let rightEye: Group = this.rightEye.shapes();
        let leftEye: Group = this.leftEye.shapes();
        // let unibrow: Group = this.unibrow.shapes();
        let teeth: Group = this.teeth.shapes();   
        let hat: Group = this.hat.shapes();
        let leftHair: Group = this.leftHair.shapes();
        let rightHair: Group = this.rightHair.shapes();

        faceShape.transform = faceShape.transform.translate(-40, -40);        
        mouth.transform = mouth.transform.translate(-30, 10);
        nose.transform = nose.transform.translate(0, -3);
        rightEye.transform = rightEye.transform.translate(20, -20);
        leftEye.transform = leftEye.transform.translate(-20, -20);
        hat.transform = hat.transform.translate(-45, -60);
        leftHair.transform = leftHair.transform.translate(-45, -40);
        rightHair.transform = rightHair.transform.translate(40, -40);        

        shapes.add(faceShape);
        shapes.add(mouth);
        shapes.add(nose);
        shapes.add(rightEye);
        shapes.add(leftEye);
        // shapes.add(unibrow);
        shapes.add(teeth);
        shapes.add(hat);
        shapes.add(leftHair);
        shapes.add(rightHair);

        return shapes;
    }
}