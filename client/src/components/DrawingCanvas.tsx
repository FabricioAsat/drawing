import { RefObject, useState } from "react";
import { Layer, Rect, Stage } from "react-konva";
import { Stage as StageRef } from "konva/lib/Stage";

export const DrawingCanvas = ({
  stageRef,
}: {
  stageRef: RefObject<StageRef>;
}) => {
  //* Arrays de los componentes que se renderizarán
  const [rectangles, setRectangles] = useState<Array<TRect>>([
    {
      id: "123",
      x: 300,
      y: 200,
      height: 200,
      width: 300,
      cornerRadius: 20,
      strokeColor: "#212529",
      strokeWidth: 2,
      fillColor: "#f8d2fa",
      fillWith: 2,
    },
  ]);

  return (
    <Stage
      ref={stageRef}
      width={window.innerWidth}
      height={window.innerHeight}
      className="bg-[#f8f9fa]"
    >
      <Layer>
        {rectangles.map((rectangle) => (
          <Rect
            key={rectangle.id}
            x={rectangle.x}
            y={rectangle.y}
            height={rectangle.height}
            width={rectangle.width}
            cornerRadius={rectangle.cornerRadius}
            stroke={rectangle.strokeColor}
            strokeWidth={rectangle.strokeWidth}
            fill={rectangle.fillColor}
          />
        ))}
      </Layer>
    </Stage>
  );
};
