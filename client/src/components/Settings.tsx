import { TYPESHAPES } from "../constants";
import { SArrow } from "./SArrow";
import { SCircle } from "./SCircle";
import { SLine } from "./SLine";
import { SRect } from "./SRect";
import { SStar } from "./SStar";

export const Settings = ({
  selectedShape,
}: {
  selectedShape: TSelectedShape | undefined;
}) => {
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
