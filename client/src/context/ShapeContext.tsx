import { createContext, useContext, useState } from "react";

interface ShapeContextProps {
  rectangles: TRect[];
  addRect: (rect: TRect) => void;
  updateSizeRect: (x: number, y: number, transformerShapeId: string) => void;
  deleteRect: (id: string) => void;
  getRectById: (id: string) => TRect | undefined;
  updateRectInfo: (updatedRect: TRect) => void;

  stars: TStar[];
  addStar: (star: TStar) => void;
  deleteStar: (id: string) => void;
  getStarById: (id: string) => TStar | undefined;
  updateStarInfo: (updatedRect: TStar) => void;

  circles: TCircle[];
  addCircle: (circle: TCircle) => void;
  updateSizeCircle: (x: number, y: number, transformerShapeId: string) => void;
  deleteCircle: (id: string) => void;
  getCircleById: (id: string) => TCircle | undefined;
  updateCircleInfo: (updatedCircle: TCircle) => void;

  lines: TLine[];
  addLine: (line: TLine) => void;
  updateSizeLine: (x: number, y: number, transformerShapeId: string) => void;
  deleteLine: (id: string) => void;
  getLineById: (id: string) => TLine | undefined;
  updateLineInfo: (updatedLine: TLine) => void;

  arrows: TArrow[];
  addArrow: (arrow: TArrow) => void;
  updateSizeArrow: (x: number, y: number, transformerShapeId: string) => void;
  deleteArrow: (id: string) => void;
  getArrowById: (id: string) => TArrow | undefined;
  updateArrowInfo: (updatedArrow: TArrow) => void;

  pens: TPen[];
  addPen: (pen: TPen) => void;
  updateSizePen: (x: number, y: number, transformerShapeId: string) => void;
  deletePen: (id: string) => void;
  getPenById: (id: string) => TPen | undefined;
  updatePenInfo: (updatedPen: TPen) => void;
}

const shapeContext = createContext<ShapeContextProps | undefined>(undefined);

export function ShapeProvider({ children }: { children: React.ReactNode }) {
  const [rectangles, setRectangles] = useState<Array<TRect>>([]);
  const [stars, setStars] = useState<Array<TStar>>([]);
  const [circles, setCircles] = useState<Array<TCircle>>([]);
  const [lines, setLines] = useState<Array<TLine>>([]);
  const [arrows, setArrows] = useState<Array<TArrow>>([]);
  const [pens, setPens] = useState<Array<TPen>>([]);

  //*: Rectangles
  function addRect(rect: TRect): void {
    setRectangles([...rectangles, rect]);
  }
  function updateSizeRect(x: number, y: number, transformerShapeId: string) {
    setRectangles((rectangles) =>
      rectangles.map((rectangle) => {
        if (rectangle.id === transformerShapeId) {
          return {
            ...rectangle,
            width: x - rectangle.x,
            height: y - rectangle.y,
          };
        }
        return rectangle;
      })
    );
  }
  function deleteRect(id: string): void {
    setRectangles(rectangles.filter((rectangle) => rectangle.id !== id));
  }
  function getRectById(id: string): TRect | undefined {
    return rectangles.find((rectangle) => rectangle.id === id);
  }
  function updateRectInfo(updatedRect: TRect): void {
    setRectangles((rectangles) =>
      rectangles.map((rectangle) => {
        if (rectangle.id === updatedRect.id) {
          return { ...rectangle, ...updatedRect };
        }
        return rectangle;
      })
    );
  }

  //*: Stars
  function addStar(star: TStar): void {
    setStars([...stars, star]);
  }
  function deleteStar(id: string): void {
    setStars(stars.filter((star) => star.id !== id));
  }
  function getStarById(id: string): TStar | undefined {
    return stars.find((star) => star.id === id);
  }
  function updateStarInfo(updatedRect: TStar): void {
    setStars((stars) =>
      stars.map((star) => {
        if (star.id === updatedRect.id) {
          return { ...star, ...updatedRect };
        }
        return star;
      })
    );
  }

  //*: Circles
  function addCircle(circle: TCircle): void {
    setCircles([...circles, circle]);
  }
  function updateSizeCircle(x: number, y: number, transformerShapeId: string) {
    setCircles((circles) =>
      circles.map((circle) => {
        if (circle.id === transformerShapeId) {
          console.log(circle.width);
          return {
            ...circle,
            radius: Math.abs(circle.width / 2),
            width: x - circle.x,
            height: y - circle.y,
          };
        }
        return circle;
      })
    );
  }
  function deleteCircle(id: string): void {
    setCircles(circles.filter((circle) => circle.id !== id));
  }
  function getCircleById(id: string): TCircle | undefined {
    return circles.find((circle) => circle.id === id);
  }
  function updateCircleInfo(updatedCircle: TCircle): void {
    setCircles((circles) =>
      circles.map((circle) => {
        if (circle.id === updatedCircle.id) {
          return { ...circle, ...updatedCircle };
        }
        return circle;
      })
    );
  }

  //*: Lines
  function addLine(line: TLine): void {
    setLines([...lines, line]);
  }
  function updateSizeLine(x: number, y: number, transformerShapeId: string) {
    setLines((lines) =>
      lines.map((line) => {
        if (line.id === transformerShapeId) {
          return {
            ...line,
            x2: x,
            y2: y,
          };
        }
        return line;
      })
    );
  }
  function deleteLine(id: string): void {
    setLines(lines.filter((line) => line.id !== id));
  }
  function getLineById(id: string): TLine | undefined {
    return lines.find((line) => line.id === id);
  }
  function updateLineInfo(updatedLine: TLine): void {
    setLines((lines) =>
      lines.map((line) => {
        if (line.id === updatedLine.id) {
          return { ...line, ...updatedLine };
        }
        return line;
      })
    );
  }

  //*: Arrows
  function addArrow(arrow: TArrow): void {
    setArrows([...arrows, arrow]);
  }
  function updateSizeArrow(x: number, y: number, transformerShapeId: string) {
    setArrows((arrows) =>
      arrows.map((arrow) => {
        if (arrow.id === transformerShapeId) {
          return {
            ...arrow,
            x2: x,
            y2: y,
          };
        }
        return arrow;
      })
    );
  }
  function deleteArrow(id: string): void {
    setArrows(arrows.filter((arrow) => arrow.id !== id));
  }
  function getArrowById(id: string): TArrow | undefined {
    return arrows.find((arrow) => arrow.id === id);
  }
  function updateArrowInfo(updatedArrow: TArrow): void {
    setArrows((arrows) =>
      arrows.map((arrow) => {
        if (arrow.id === updatedArrow.id) {
          return { ...arrow, ...updatedArrow };
        }
        return arrow;
      })
    );
  }

  //*: Pen
  function addPen(pen: TPen): void {
    setPens([...pens, pen]);
  }
  function updateSizePen(x: number, y: number, transformerShapeId: string) {
    setPens((pens) =>
      pens.map((pen) => {
        if (pen.id === transformerShapeId) {
          return {
            ...pen,
            points: [...pen.points, x, y],
          };
        }
        return pen;
      })
    );
  }
  function deletePen(id: string): void {
    setPens(pens.filter((pen) => pen.id !== id));
  }
  function getPenById(id: string): TPen | undefined {
    return pens.find((pen) => pen.id === id);
  }
  function updatePenInfo(updatedPen: TPen): void {
    setPens((pens) =>
      pens.map((pen) => {
        if (pen.id === updatedPen.id) {
          return { ...pen, ...updatedPen };
        }
        return pen;
      })
    );
  }

  return (
    <shapeContext.Provider
      value={{
        rectangles,
        addRect,
        updateSizeRect,
        deleteRect,
        getRectById,
        updateRectInfo,

        stars,
        addStar,
        deleteStar,
        getStarById,
        updateStarInfo,

        circles,
        addCircle,
        updateSizeCircle,
        deleteCircle,
        getCircleById,
        updateCircleInfo,

        lines,
        addLine,
        updateSizeLine,
        deleteLine,
        getLineById,
        updateLineInfo,

        arrows,
        addArrow,
        updateSizeArrow,
        deleteArrow,
        getArrowById,
        updateArrowInfo,

        pens,
        addPen,
        updateSizePen,
        deletePen,
        getPenById,
        updatePenInfo,
      }}
    >
      {children}
    </shapeContext.Provider>
  );
}

export function useShapeContext(): ShapeContextProps {
  const context = useContext(shapeContext);
  if (context === undefined) {
    throw new Error("useShapeContext must be used within a ShapeProvider");
  }
  return context;
}
