import { TYPESHAPES } from "../constants";
import { SRect } from "./SRect";

export const Settings = ({
  selectedShape,
}: {
  selectedShape: TSelectedShape | undefined;
}) => {
  console.log(selectedShape);
  switch (selectedShape?.type) {
    case TYPESHAPES.RECTANGLE:
      return <SRect selectedShape={selectedShape} />;
    default:
      return <></>;
  }
};
