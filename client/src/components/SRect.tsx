import { useEffect, useState } from "react";
import { FaRegSquare, FaSquare } from "react-icons/fa";
import { TYPESHAPES } from "../constants";
import { useShapeContext } from "../context/ShapeContext";
import {
  PiNumberSquareNineFill,
  PiNumberSquareSixFill,
  PiNumberSquareThreeFill,
} from "react-icons/pi";
import { FaRegSquareFull } from "react-icons/fa6";

export const SRect = ({ selectedShape }: { selectedShape: TSelectedShape }) => {
  const [currentSetting, setcurrentSetting] = useState<TRect>();
  const { getRectById, updateRectInfo } = useShapeContext();

  function handleCurrentSetting(attr: string, value: string | number) {
    if (!currentSetting || !selectedShape) return;
    switch (selectedShape.type) {
      case TYPESHAPES.RECTANGLE:
        setcurrentSetting({ ...currentSetting, [attr]: value });
        break;
    }
  }

  //*: Effects
  useEffect(() => {
    if (!selectedShape) return;
    switch (selectedShape.type) {
      case TYPESHAPES.RECTANGLE:
        setcurrentSetting(getRectById(selectedShape.id));
        break;
    }
  }, [selectedShape]);

  useEffect(() => {
    if (!currentSetting || !selectedShape) return;
    switch (selectedShape.type) {
      case TYPESHAPES.RECTANGLE:
        updateRectInfo(currentSetting);
        break;
    }
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

      <aside className="flex flex-col items-start">
        <p className="text-xs italic font-bold">Bordes</p>
        <div className="flex items-center my-px gap-x-2">
          <button
            onClick={() => handleCurrentSetting("cornerRadius", 0)}
            className={`p-px border hover:border-neutral-300 ${
              currentSetting?.cornerRadius === 0
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <FaRegSquareFull size={17} color="#262626" />
          </button>
          <button
            onClick={() =>
              handleCurrentSetting(
                "cornerRadius",
                (currentSetting?.width || 0) < (currentSetting?.height || 0)
                  ? (currentSetting?.width || 0) * 0.2
                  : (currentSetting?.height || 0) * 0.2
              )
            }
            className={`p-px border rounded-md hover:border-neutral-300 ${
              currentSetting?.cornerRadius || 0 > 0
                ? "border-neutral-800"
                : "border-transparent"
            }`}
          >
            <FaRegSquare size={20} color="#262626" />
          </button>
        </div>
      </aside>
    </section>
  );
};
