import { createContext, useContext, useState } from "react";

interface ShapeContextProps {
  rectangles: TRect[];
  addRect: (rect: TRect) => void;
  updateSizeRect: (x: number, y: number, transformerShapeId: string) => void;
  deleteRect: (id: string) => void;
}

const shapeContext = createContext<ShapeContextProps | undefined>(undefined);

export function ShapeProvider({ children }: { children: React.ReactNode }) {
  const [rectangles, setRectangles] = useState<Array<TRect>>([]);

  function addRect(rect: TRect) {
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
  function deleteRect(id: string) {
    setRectangles(rectangles.filter((rectangle) => rectangle.id !== id));
  }

  return (
    <shapeContext.Provider
      value={{
        rectangles,
        addRect,
        updateSizeRect,
        deleteRect,
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
