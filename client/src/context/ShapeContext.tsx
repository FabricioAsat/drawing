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
  updateSizeStar: (x: number, y: number, transformerShapeId: string) => void;
  deleteStar: (id: string) => void;
  getStarById: (id: string) => TStar | undefined;
  updateStarInfo: (updatedRect: TStar) => void;
}

const shapeContext = createContext<ShapeContextProps | undefined>(undefined);

export function ShapeProvider({ children }: { children: React.ReactNode }) {
  const [rectangles, setRectangles] = useState<Array<TRect>>([]);
  const [stars, setStars] = useState<Array<TStar>>([]);

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

  //*: Diamonds
  function addStar(star: TStar): void {
    setStars([...stars, star]);
  }
  function updateSizeStar(x: number, y: number, transformerShapeId: string) {
    setStars((stars) =>
      stars.map((star) => {
        if (star.id === transformerShapeId) {
          return {
            ...star,
            width: x - star.x,
            height: y - star.y,
          };
        }
        return star;
      })
    );
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
        updateSizeStar,
        deleteStar,
        getStarById,
        updateStarInfo,
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
