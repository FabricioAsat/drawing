// Components
import { useRef, useState } from "react";
import { Stage as StageRef } from "konva/lib/Stage";

// Components
import { ACTIONS } from "./constants";
import { Actions } from "./components/Actions";
import { DrawingCanvas } from "./components/DrawingCanvas";
import { Settings } from "./components/Settings";

export default function App() {
  const [currentAction, setCurrentAction] = useState(ACTIONS.SELECT);
  const [canDelete, setCanDelete] = useState(false);
  const [selectedShape, setSelectedShape] = useState<TSelectedShape>();

  //*: Refs
  const stageRef = useRef<StageRef | null>(null);

  return (
    <>
      <Actions
        setCurrentAction={setCurrentAction}
        currentAction={currentAction}
        canDelete={canDelete}
        selectedShape={selectedShape}
        setSelectedShape={setSelectedShape}
      />

      <Settings selectedShape={selectedShape} />

      <DrawingCanvas
        stageRef={stageRef}
        currentAction={currentAction}
        setCurrentAction={setCurrentAction}
        setCanDelete={setCanDelete}
        selectedShape={selectedShape}
        setSelectedShape={setSelectedShape}
      />
    </>
  );
}
