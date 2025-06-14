type ShapeOfPolgon = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function getArea(shape: ShapeOfPolgon): number {
  if (shape.kind === "circle") {
    // shape is narrowed to { kind: "circle"; radius: number }
    return Math.PI * shape.radius ** 2;
  } else {
    // shape is now { kind: "square"; side: number }
    return shape.side ** 2;
  }
}
