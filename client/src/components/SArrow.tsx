import { useEffect, useState } from "react";
import { FaSquare } from "react-icons/fa";
import { useShapeContext } from "../context/ShapeContext";
import {
  PiNumberSquareNineFill,
  PiNumberSquareSixFill,
  PiNumberSquareThreeFill,
} from "react-icons/pi";

export const SArrow = ({
  selectedShape,
}: {
  selectedShape: TSelectedShape;
}) => {
  const [currentSetting, setcurrentSetting] = useState<TArrow>();
  const { getArrowById, updateArrowInfo } = useShapeContext();

  function handleCurrentSetting(attr: string, value: string | number) {
    if (!currentSetting || !selectedShape) return;
    setcurrentSetting({ ...currentSetting, [attr]: value });
  }

  //*: Effects
  useEffect(() => {
    if (!selectedShape) return;
    setcurrentSetting(getArrowById(selectedShape.id));
  }, [selectedShape]);

  useEffect(() => {
    if (!currentSetting || !selectedShape) return;
    updateArrowInfo(currentSetting);
  }, [currentSetting]);

  return (
    <section className="absolute left-0 z-50 flex flex-col items-start px-5 py-2 bg-white rounded-lg shadow-md gap-y-4 top-20 gap-x-2 shadow-black/25">
      <aside className="flex flex-col items-start">
        <p className="text-xs italic font-bold">Trazo</p>
        <div className="flex items-center my-px gap-x-2">
          <button
            onClick={() => handleCurrentSetting("strokeColor", "#262626")}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.strokeColor === "#262626"
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <FaSquare size={20} color="#262626" />
          </button>
          <button
            onClick={() => handleCurrentSetting("strokeColor", "#38bdf8")}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.strokeColor === "#38bdf8"
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <FaSquare size={20} color="#38bdf8" />
          </button>
          <button
            onClick={() => handleCurrentSetting("strokeColor", "#f87171")}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.strokeColor === "#f87171"
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <FaSquare size={20} color="#f87171" />
          </button>
          <button
            onClick={() => handleCurrentSetting("strokeColor", "#4ade80")}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.strokeColor === "#4ade80"
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <FaSquare size={20} color="#4ade80" />
          </button>
          <button
            onClick={() => handleCurrentSetting("strokeColor", "#f472b6")}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.strokeColor === "#f472b6"
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <FaSquare size={20} color="#f472b6" />
          </button>
        </div>
      </aside>

      <aside className="flex flex-col items-start">
        <p className="text-xs italic font-bold">Grosor del trazo</p>
        <div className="flex items-center my-px gap-x-2">
          <button
            onClick={() => handleCurrentSetting("strokeWidth", 3)}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.strokeWidth === 3
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <PiNumberSquareThreeFill size={20} color="#262626" />
          </button>
          <button
            onClick={() => handleCurrentSetting("strokeWidth", 6)}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.strokeWidth === 6
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <PiNumberSquareSixFill size={20} color="#262626" />
          </button>
          <button
            onClick={() => handleCurrentSetting("strokeWidth", 9)}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.strokeWidth === 9
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <PiNumberSquareNineFill size={20} color="#262626" />
          </button>
        </div>
      </aside>
    </section>
  );
};
