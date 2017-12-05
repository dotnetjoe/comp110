import { EggRoulette } from "./EggRoulette";
import { Egg } from "./Egg";
import { SVG, SVGElement, Group, Rectangle, Circle, Stroke, Color, Text, Font, Line } from "introcs/graphics";

// Egg Carton Layout Constants
const DIAMETER: number = 64;
const RADIUS: number = DIAMETER / 2;
const GUTTER: number = (RADIUS / 4);

// Helper Reducer
function toGroup(group: Group, element: SVGElement): Group {
    group.add(element);
    return group;
}

export class Graphics {
    game: EggRoulette;
    reveal: boolean;

    constructor(game: EggRoulette, reveal?: boolean) {
        this.game = game;
        if (reveal === undefined) {
            this.reveal = false;
        } else {
            this.reveal = reveal;
        }
    }

    draw(): void {
        let artboard: SVG = new SVG("artboard");
        let group: Group = new Group();

        if (this.game.winner() === -1) {
            group.add(this.scoreboard());
            group.add(this.carton());
        } else {
            group.add(this.winner());
        }

        artboard.render(group);
    }

    scoreboard(): Group {
        let scoreboardGraphics: Group = new Group();
        let game: EggRoulette = this.game;

        // Defining a Nested Reducer Function
        function score(value: number, player: number): Group {
            let graphics: Group = new Group();

            let text: Text = new Text("P" + player);
            text.fill = Color.WHITE;
            text.textAnchor = "middle";
            text.x = player * DIAMETER;
            text.y = 0;
            graphics.add(text);
        
            let scoreText: Text = new Text(String(value));
            scoreText.textAnchor = "middle";
            scoreText.fill = Color.WHITE;
            scoreText.x = player * DIAMETER;
            scoreText.y = scoreText.font.size + GUTTER;
            graphics.add(scoreText);
        
            if (player === game.currentPlayer()) {
                text.font = new Font("Arial Black", 24);
                scoreText.font = text.font;
            }

            graphics.transform = graphics.transform.translate(0, -16);
            return graphics;
        }

        this.game
            .scores
            .map(score)
            .reduce(toGroup, scoreboardGraphics);
            
        return scoreboardGraphics;
    }

    carton(): Group {
        let cartonGraphics: Group = new Group();
        let game: EggRoulette = this.game;
        let self: Graphics = this;
        
        let carton: Rectangle = new Rectangle(2 * DIAMETER + 3 * GUTTER, 6 * DIAMETER + 7 * GUTTER, -(RADIUS + GUTTER), RADIUS - GUTTER);
        carton.fill = new Color(0.9, 0.9, 0.9);
        carton.stroke = new Stroke(carton.fill, 16, "round", "round");
        cartonGraphics.add(carton);
    
        function eggGraphic(egg: Egg, index: number): Group {
            let graphics: Group = new Group();
        
            let x: number = index % 2 * (DIAMETER + GUTTER);
            let y: number = Math.floor(index / 2) * (DIAMETER + GUTTER) + DIAMETER;
        
            let eggCircle: Circle = new Circle(RADIUS, x, y);
            eggCircle.fill = new Color(0.941, 0.922, 0.853);
            graphics.add(eggCircle);
        
            if (egg.isCracked || self.reveal) {
                if (egg.isRaw) {
                    let yolk: Circle = new Circle(RADIUS / 1.5, x, y);
                    yolk.fill = new Color(0.976, 0.816, 0.063);
                    yolk.strokeOpacity = 0;
                    eggCircle.fill = Color.WHITE;
                    graphics.add(yolk);
                } else {
                    eggCircle.opacity = 0.1;
                }
            }
        
            graphics.onclick = function(): void {
                game.pick(index);
                self.draw();
            };
        
            return graphics;
        }

        game.carton
            .eggs
            .map(eggGraphic)
            .reduce(toGroup, cartonGraphics);
    
        return cartonGraphics;
    }

    winner(): Text {
        let winText: Text = new Text("Player " + this.game.winner() + " wins!");
        winText.fill = Color.WHITE;
        return winText;
    }

}
