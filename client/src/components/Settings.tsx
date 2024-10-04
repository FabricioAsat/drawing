import { TYPESHAPES } from "../constants";
import { SCircle } from "./SCircle";
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
  }
};
