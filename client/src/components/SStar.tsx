import { useEffect, useState } from "react";
import { FaSquare } from "react-icons/fa";
import { useShapeContext } from "../context/ShapeContext";
import {
  PiNumberSquareEightFill,
  PiNumberSquareFiveFill,
  PiNumberSquareFourFill,
  PiNumberSquareNineFill,
  PiNumberSquareSevenFill,
  PiNumberSquareSixFill,
  PiNumberSquareThreeFill,
  PiNumberSquareTwoFill,
} from "react-icons/pi";
import { RxTransparencyGrid } from "react-icons/rx";

export const SStar = ({ selectedShape }: { selectedShape: TSelectedShape }) => {
  const [currentSetting, setcurrentSetting] = useState<TStar>();
  const { getStarById, updateStarInfo } = useShapeContext();

  function handleCurrentSetting(attr: string, value: string | number) {
    if (!currentSetting || !selectedShape) return;

    if (attr === "innerRadius" || attr === "outerRadius") {
      const re = new RegExp("[0-9]{0,3}");
      if (!re.test(String(value))) return;
      setcurrentSetting({ ...currentSetting, [attr]: Number(value) });
      return;
    }
    setcurrentSetting({ ...currentSetting, [attr]: value });
  }

  //*: Effects
  useEffect(() => {
    if (!selectedShape) return;
    setcurrentSetting(getStarById(selectedShape.id));
  }, [selectedShape]);

  useEffect(() => {
    if (!currentSetting) return;
    updateStarInfo(currentSetting);
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
        <p className="text-xs italic font-bold">Fondo</p>
        <div className="flex items-center my-px gap-x-2">
          <button
            onClick={() => handleCurrentSetting("fillColor", "#262626")}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.fillColor === "#262626"
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <FaSquare size={20} color="#262626" />
          </button>
          <button
            onClick={() => handleCurrentSetting("fillColor", "#38bdf8")}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.fillColor === "#38bdf8"
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <FaSquare size={20} color="#38bdf8" />
          </button>
          <button
            onClick={() => handleCurrentSetting("fillColor", "#f87171")}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.fillColor === "#f87171"
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <FaSquare size={20} color="#f87171" />
          </button>
          <button
            onClick={() => handleCurrentSetting("fillColor", "#4ade80")}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.fillColor === "#4ade80"
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <FaSquare size={20} color="#4ade80" />
          </button>
          <button
            onClick={() => handleCurrentSetting("fillColor", "#f472b6")}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.fillColor === "#f472b6"
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <FaSquare size={20} color="#f472b6" />
          </button>
          <button
            onClick={() => handleCurrentSetting("fillColor", "#00000000")}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.fillColor === "#00000000"
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <RxTransparencyGrid size={17} />
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

      <aside className="flex flex-col items-start justify-center gap-x-5">
        <p className="text-xs italic font-bold">Numero de puntos</p>
        <div className="flex items-center my-px gap-x-2">
          <button
            onClick={() => handleCurrentSetting("numPoints", 2)}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.numPoints === 2
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <PiNumberSquareTwoFill size={20} color="#262626" />
          </button>
          <button
            onClick={() => handleCurrentSetting("numPoints", 3)}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.numPoints === 3
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <PiNumberSquareThreeFill size={20} color="#262626" />
          </button>
          <button
            onClick={() => handleCurrentSetting("numPoints", 4)}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.numPoints === 4
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <PiNumberSquareFourFill size={20} color="#262626" />
          </button>
          <button
            onClick={() => handleCurrentSetting("numPoints", 5)}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.numPoints === 5
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <PiNumberSquareFiveFill size={20} color="#262626" />
          </button>
          <button
            onClick={() => handleCurrentSetting("numPoints", 6)}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.numPoints === 6
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <PiNumberSquareSixFill size={20} color="#262626" />
          </button>
          <button
            onClick={() => handleCurrentSetting("numPoints", 7)}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.numPoints === 7
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <PiNumberSquareSevenFill size={20} color="#262626" />
          </button>
          <button
            onClick={() => handleCurrentSetting("numPoints", 8)}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.numPoints === 8
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <PiNumberSquareEightFill size={20} color="#262626" />
          </button>
          <button
            onClick={() => handleCurrentSetting("numPoints", 9)}
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.numPoints === 9
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
