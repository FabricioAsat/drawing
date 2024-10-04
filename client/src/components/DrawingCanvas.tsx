import { RefObject, useEffect, useRef, useState } from "react";
import { Stage as StageRef } from "konva/lib/Stage";
import { Transformer as TransformerRef } from "konva/lib/shapes/Transformer";
import { KonvaEventObject } from "konva/lib/Node";
import { Circle, Layer, Rect, Stage, Star, Transformer } from "react-konva";

import { ACTIONS } from "../constants";
import { useShapeContext } from "../context/ShapeContext";

export const DrawingCanvas = ({
  stageRef,
  currentAction,
  setCurrentAction,
  setCanDelete,
  selectedShape,
  setSelectedShape,
}: {
  currentAction: string;
  stageRef: RefObject<StageRef>;
  setCurrentAction: (action: string) => void;
  setCanDelete: (canDelete: boolean) => void;
  selectedShape: TSelectedShape | undefined;
  setSelectedShape: (selectedShape: TSelectedShape | undefined) => void;
}) => {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isDraggable, setIsDraggable] = useState<boolean>(false);

  const [transformerShapeId, setTransformerShapeId] = useState("");
  const transformerRef = useRef<TransformerRef | null>(null);

  //* Arrays de los componentes que se renderizarán
  const {
    rectangles,
    addRect,
    updateSizeRect,
    stars,
    addStar,
    circles,
    addCircle,
    updateSizeCircle,
  } = useShapeContext();

  //*: Funciones de eventos del stage
  function onPointerUp() {
    setIsDrawing(false);
    setCurrentAction(ACTIONS.SELECT);

    if (currentAction === ACTIONS.SELECT) {
      setSelectedShape(undefined);
      transformerRef.current?.nodes([]);
      return;
    }
  }
  function onPointerDown() {
    const stage = stageRef.current;
    if (!stage) return;
    const { x, y } = stage.getPointerPosition() || { x: 0, y: 0 };
    setIsDrawing(true);
    const id = crypto.randomUUID();
    setTransformerShapeId(id);

    switch (currentAction) {
      case ACTIONS.RECTANGLE:
        addRect({
          id,
          x,
          y,
          height: 5,
          width: 5,
          cornerRadius: 0,
          strokeColor: "#262626",
          strokeWidth: 3,
          fillColor: "#0000",
        });
        break;
      case ACTIONS.STAR:
        addStar({
          id,
          x,
          y,
          height: 100,
          width: 100,
          numPoints: 5,
          innerRadius: 25,
          outerRadius: 50,
          strokeColor: "#262626",
          strokeWidth: 3,
          fillColor: "#fff0",
        });
        break;

      case ACTIONS.CICLE:
        addCircle({
          id,
          x,
          y,
          width: 10,
          height: 10,
          radius: 5,
          strokeColor: "#262626",
          strokeWidth: 3,
          fillColor: "#fff0",
        });
        break;
    }
  }
  function onPointerMove() {
    if (currentAction === ACTIONS.SELECT || !isDrawing) return;
    const stage = stageRef.current;
    if (!stage) return;
    const { x, y } = stage.getPointerPosition() || { x: 0, y: 0 };

    switch (currentAction) {
      case ACTIONS.RECTANGLE:
        updateSizeRect(x, y, transformerShapeId);
        break;
      case ACTIONS.STAR: // Se deforma la estrella, asique lo saqué
        break;
      case ACTIONS.CICLE:
        updateSizeCircle(x, y, transformerShapeId);
        break;
    }
  }
  // --------------------------------

  function showTransformerBox(e: KonvaEventObject<MouseEvent>) {
    if (currentAction !== ACTIONS.SELECT || !transformerRef.current) return;
    const target = e.currentTarget;
    setSelectedShape({ id: target.attrs.id, type: target.className });
    transformerRef.current.nodes([target]);
  }

  //*: Effects
  useEffect(() => {
    setIsDraggable(currentAction === ACTIONS.SELECT);
  }, [currentAction]);
  useEffect(() => {
    setCanDelete(!!selectedShape);
    if (!selectedShape) transformerRef.current?.nodes([]);
  }, [selectedShape]);

  //TODO: Tema zoom, ver
  return (
    <Stage
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
      ref={stageRef}
      width={window.innerWidth}
      height={window.innerHeight}
      className="bg-[#f8f9fa]"
    >
      <Layer>
        {rectangles.map((rectangle: TRect) => (
          <Rect
            key={rectangle.id}
            id={rectangle.id}
            x={rectangle.x}
            y={rectangle.y}
            height={rectangle.height}
            width={rectangle.width}
            cornerRadius={rectangle.cornerRadius}
            stroke={rectangle.strokeColor}
            strokeWidth={rectangle.strokeWidth}
            fill={rectangle.fillColor}
            draggable={isDraggable}
            onClick={showTransformerBox}
          />
        ))}

        {stars.map((star: TStar) => (
          <Star
            key={star.id}
            id={star.id}
            x={star.x}
            y={star.y}
            numPoints={star.numPoints}
            innerRadius={star.innerRadius}
            outerRadius={star.outerRadius}
            height={star.width}
            width={star.width}
            stroke={star.strokeColor}
            strokeWidth={star.strokeWidth}
            fill={star.fillColor}
            draggable={isDraggable}
            onClick={showTransformerBox}
          />
        ))}

        {circles.map((circle: TCircle) => (
          <Circle
            key={circle.id}
            id={circle.id}
            x={circle.x}
            width={circle.width}
            height={circle.width}
            y={circle.y}
            radius={Math.abs(circle.radius)}
            stroke={circle.strokeColor}
            strokeWidth={circle.strokeWidth}
            fill={circle.fillColor}
            draggable={isDraggable}
            onClick={showTransformerBox}
          />
        ))}

        <Transformer ref={transformerRef} padding={5} />
      </Layer>
    </Stage>
  );
};
