class Transform {

    static DEFAULT: Transform = new Transform();
    static RADIANS: number = 0.0174533;

    a: number = 1;
    b: number = 0;
    c: number = 0;
    d: number = 1;
    e: number = 0;
    f: number = 0;

    copy(): Transform {
        let t: Transform = new Transform();
        t.a = this.a;
        t.b = this.b;
        t.c = this.c;
        t.d = this.d;
        t.e = this.e;
        t.f = this.f;
        return t;
    }

    translate(x: number, y?: number): Transform {
        let t: Transform = this.copy();
        t.e = x;
        if (y) {
            t.f = y;
        }
        return t;
    }

    scale(x: number, y?: number): Transform {
        let t: Transform = this.copy();
        t.a = x;
        if (y === undefined) {
            t.d = x;
        } else {
            t.d = y;
        }
        return t;
    }

    rotate(a: number): Transform {
        let t: Transform = this.copy();
        t.a = Math.cos(a * Transform.RADIANS);
        t.b = Math.sin(a * Transform.RADIANS);
        t.c = -Math.sin(a * Transform.RADIANS);
        t.d = Math.cos(a * Transform.RADIANS);
        return t;
    }

    toMatrix(): string {
        return `matrix(${this.a},${this.b},${this.c},${this.d},${this.e},${this.f})`;
    }

}


class Color {

    static BLACK: Color = new Color();
    static WHITE: Color = new Color(1, 1, 1);

    private red: number = 0;
    private green: number = 0;
    private blue: number = 0;

    constructor(red?: number, green?: number, blue?: number) {
        if (red) {
            this.red = red;
        }

        if (green) {
            this.green = green;
        }

        if (blue) {
            this.blue = blue;
        }
    }

    toRGB(): string {
        return `rgb(${this.red * 100}%, ${this.green * 100}%, ${this.blue * 100}%)`;
    }
}

class Stroke {

    static DEFAULT: Stroke = new Stroke();

    private _color: Color = Color.BLACK;
    private _width: number = 1;
    private _linecap: "butt" | "square" | "round" = "round";
    private _linejoin: "miter" | "round" | "bevel" = "round";

    constructor(color?: Color, width?: number, linecap?: "butt" | "square" | "round", linejoin?: "miter" | "round" | "bevel") {
        if (color) {
            this._color = color;
        }

        if (width) {
            this._width = width;
        }

        if (linecap) {
            this._linecap = linecap;
        }
    }

    get color(): Color {
        return this._color;
    }

    get width(): number {
        return this._width;
    }

    get linecap(): "butt" | "square" | "round" {
        return this._linecap;
    }

    get linejoin(): "miter" | "round" | "bevel" {
        return this._linejoin;
    }

}

class Shape {
    transform: Transform = Transform.DEFAULT;
    stroke: Stroke = Stroke.DEFAULT;
    fill: Color = Color.WHITE;
}

class Rect extends Shape {
    width: number;
    height: number;
    x: number = 0;
    y: number = 0;

    constructor(width: number, height: number, x?: number, y?: number) {
        super();
        this.width = width;
        this.height = height;
        if (x) {
            this.x = x;
        }
        if (y) {
            this.y = y;
        }
    }
}

class Group extends Shape {
    children: Shape[] = [];

    add(shape: Shape): void {
        this.children.push(shape);
    }
}

function clearChildren(element: HTMLElement): void {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function render(element: Element, shape: Shape): void {
    if (shape instanceof Rect) {
        let r: SVGRectElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        r.setAttribute("width", shape.width + "px");
        r.setAttribute("height", shape.height + "px");
        r.setAttribute("x", String(shape.x));
        r.setAttribute("y", String(shape.y));
        r.setAttribute("stroke", shape.stroke.color.toRGB());
        r.setAttribute("stroke-width", String(shape.stroke.width));
        r.setAttribute("stroke-linecap", shape.stroke.linecap);
        r.setAttribute("stroke-linejoin", shape.stroke.linejoin);
        r.setAttribute("fill", shape.fill.toRGB());
        r.setAttribute("transform", shape.transform.toMatrix());
        element.appendChild(r);
    } else if (shape instanceof Group) {
        let g: SVGGElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
        shape.children.forEach((child: Shape) => {
            render(g, child);
        });
        g.setAttribute("transform", shape.transform.toMatrix());
        element.appendChild(g);
    }
}

function post(element: Element): void {
    let board: SVGElement = element as SVGElement;
    
    let transG: SVGGElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
    board.appendChild(transG);

    let scaleG: SVGGElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
    transG.appendChild(scaleG);
    
    for (let i: number = 0; i < board.children.length; i++) {
        let child: Element = board.children.item(i);
        if (child !== transG) {
            board.removeChild(child);
            scaleG.appendChild(child);
        }
    }

    
    let clientRect: ClientRect = board.getBoundingClientRect();
    let width: number = clientRect.width * 0.9;
    let height: number = clientRect.height * 0.9;

    let scaleBox: SVGRect = scaleG.getBBox();
    let widthRatio: number = scaleBox.width / width;
    let heightRatio: number = scaleBox.height / height;
    let scale: number;
    if (widthRatio > heightRatio) {
        scale = 1 / widthRatio;
    } else {
        scale = 1 / heightRatio;
    }
    scaleG.setAttribute("transform", `scale(${scale})`);

    let transBox: SVGRect = transG.getBBox();
    let centerX: number = (clientRect.right - clientRect.left) / 2.0;
    let centerBoardX: number = transBox.x + (transBox.width / 2.0);
    let deltaX: number = centerX - centerBoardX;
    let centerY: number = (clientRect.bottom - clientRect.top) / 2.0;
    let centerBoardY: number = transBox.y + (transBox.height / 2.0);
    let deltaY: number = centerY - centerBoardY;
    transG.setAttribute("transform", `translate(${deltaX},${deltaY})`);
    
}

let svg: HTMLObjectElement;
let t: number = 0;

function main(): void {
    svg = document.getElementById("display") as HTMLObjectElement;
    svg.style.background = "black";
    svg.style.width = "100%";
    svg.style.height = "100vh";

    renderer();
    setInterval(renderer, 20);
}

function renderer(): void {
    t += 1;
    clearChildren(svg);
    let g: Group = new Group();
    let fill: Color = new Color(0.2, 0.3, 0.2);
    let stroke: Stroke = new Stroke(new Color(0.4, 0.8, 0.4), 0.2);
    for (let i: number = 0; i < 100; i++) {
        let r: Rect = new Rect(50, 50, -25, -25);
        r.fill = fill;
        r.stroke = stroke;
        r.transform = r.transform.translate(i * 10 + 50, 100 + 10 * Math.sin(t * Transform.RADIANS + (i / 10))).rotate(Math.sin( (t * Transform.RADIANS) / 10 + (i / 1000)) * 180);
        g.add(r);
    }
    render(svg, g);
    post(svg);
}

main();