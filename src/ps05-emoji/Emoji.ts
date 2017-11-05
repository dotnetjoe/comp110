// TODO: ADD HONOR PLEDGE HERE

// TODO: Import the classes you need to work with your Emoji
import { Group, Color, Text } from "introcs/graphics";

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

        // TODO #1: Remove the three lines of code below adding the text "Emoji"
        //          to the shapes group.
        // TODO #2: Import, construct, and add one or more Shape objects to the shapes
        //          group to design your FaceShape.
        // TODO #3: Ensure at least one shape is filled with the
        //          FaceShape's tone Color property. (Requirement A2!)
        let temp: Text = new Text("PS05: Emoji!");
        temp.textAnchor = "middle";
        shapes.add(temp);

        return shapes;
    }

}

// TODO: Eye class

// TODO: Mouth class

// TODO: Emoji class