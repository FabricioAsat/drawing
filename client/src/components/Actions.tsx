import { AiOutlineLine } from "react-icons/ai";
import { BsCursor } from "react-icons/bs";
import { IoHandLeftOutline, IoStarOutline } from "react-icons/io5";
import {
  LuArrowDownRight,
  LuCircle,
  LuPenLine,
  LuRectangleHorizontal,
  LuTextCursor,
} from "react-icons/lu";
import { ACTIONS, TYPESHAPES } from "../constants";
import { RiDeleteBin2Fill, RiDeleteBin7Fill } from "react-icons/ri";
import { useShapeContext } from "../context/ShapeContext";

export const Actions = ({
  currentAction,
  setCurrentAction,
  canDelete,
  selectedShape,
  setSelectedShape,
}: {
  currentAction: string;
  setCurrentAction: (action: string) => void;
  canDelete: boolean;
  selectedShape: TSelectedShape | undefined;
  setSelectedShape: (selectedShape: TSelectedShape | undefined) => void;
}) => {
  const { deleteRect, deleteStar, deleteCircle } = useShapeContext();

  //TODO: Revisar el tema de los cursors.
  function handleAction(newAction: string) {
    setCurrentAction(newAction);
  }

  function handleDelete() {
    if (!selectedShape) return;
    switch (selectedShape.type) {
      case TYPESHAPES.RECTANGLE:
        deleteRect(selectedShape.id);
        break;
      case TYPESHAPES.STAR:
        deleteStar(selectedShape.id);
        break;
      case TYPESHAPES.CIRCLE:
        deleteCircle(selectedShape.id);
        break;
    }
    setSelectedShape(undefined);
  }

  //TODO: Revisar la clase "left-[calc(50vw-232px)]",
  return (
    <div className="absolute z-50 flex top-5 left-[calc(50vw-232px)] gap-x-2 px-5 py-2 rounded-lg shadow-md shadow-black/25 bg-white">
      <button
        onClick={() => {
          handleAction(ACTIONS.HAND);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md ${
          currentAction === ACTIONS.HAND ? "bg-sky-300" : "hover:bg-sky-200"
        }`}
      >
        <IoHandLeftOutline size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.SELECT);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.SELECT ? "bg-sky-300" : "hover:bg-sky-200"
        }`}
      >
        <BsCursor size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.RECTANGLE);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.RECTANGLE
            ? "bg-sky-300"
            : "hover:bg-sky-200"
        }`}
      >
        <LuRectangleHorizontal size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.STAR);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.STAR ? "bg-sky-300" : "hover:bg-sky-200"
        }`}
      >
        <IoStarOutline size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.CICLE);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.CICLE ? "bg-sky-300" : "hover:bg-sky-200"
        }`}
      >
        <LuCircle size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.ARROW);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.ARROW ? "bg-sky-300" : "hover:bg-sky-200"
        }`}
      >
        <LuArrowDownRight size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.LINE);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.LINE ? "bg-sky-300" : "hover:bg-sky-200"
        }`}
      >
        <AiOutlineLine size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.DRAW);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.DRAW ? "bg-sky-300" : "hover:bg-sky-200"
        }`}
      >
        <LuPenLine size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.TEXT);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.TEXT ? "bg-sky-300" : "hover:bg-sky-200"
        }`}
      >
        <LuTextCursor size={16} color="#212529" />
      </button>

      <hr className="w-0.5 h-8 border-l-2 border-neutral-200" />

      <button
        onClick={handleDelete}
        disabled={!canDelete}
        className={`px-3 py-2 transition-colors duration-200 rounded-md disabled:opacity-50`}
      >
        {canDelete ? (
          <RiDeleteBin7Fill size={16} color="#f87171" />
        ) : (
          <RiDeleteBin2Fill size={16} color="#f87171" />
        )}
      </button>
    </div>
  );
};
