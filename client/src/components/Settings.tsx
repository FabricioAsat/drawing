import { ACTIONS, TYPESHAPES } from "../constants";
import { SArrow } from "./SArrow";
import { SCircle } from "./SCircle";
import { SDraw } from "./SDraw";
import { SLine } from "./SLine";
import { SRect } from "./SRect";
import { SStar } from "./SStar";

export const Settings = ({
  selectedShape,
  currentAction,
  initialDrawProps,
  setInitialDrawProps,
}: {
  selectedShape: TSelectedShape | undefined;
  currentAction: string;
  initialDrawProps: TInitialDrawProps;
  setInitialDrawProps: (initialProps: TInitialDrawProps) => void;
}) => {
  if (currentAction === ACTIONS.DRAW)
    return (
      <SDraw
        selectedShape={selectedShape}
        setInitialDrawProps={setInitialDrawProps}
        initialDrawProps={initialDrawProps}
      />
    );

  switch (selectedShape?.type) {
    case TYPESHAPES.RECTANGLE:
      return <SRect selectedShape={selectedShape} />;
    case TYPESHAPES.STAR:
      return <SStar selectedShape={selectedShape} />;
    case TYPESHAPES.CIRCLE:
      return <SCircle selectedShape={selectedShape} />;
    case TYPESHAPES.LINE:
      return <SLine selectedShape={selectedShape} />;
    case TYPESHAPES.ARROW:
      return <SArrow selectedShape={selectedShape} />;
  }
};
