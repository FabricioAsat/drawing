// Components
import { useRef, useState } from "react";
import { Stage as StageRef } from "konva/lib/Stage";

// Components
import { ACTIONS } from "./constants";
import { Actions } from "./components/Actions";
import { DrawingCanvas } from "./components/DrawingCanvas";

export default function App() {
  const [currentAction, setCurrentAction] = useState(ACTIONS.SELECT);

  //*: Refs
  const stageRef = useRef<StageRef | null>(null);

  return (
    <>
      <Actions
        setCurrentAction={setCurrentAction}
        currentAction={currentAction}
      />
      <DrawingCanvas stageRef={stageRef} />
    </>
  );
}
