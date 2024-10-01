import { AiOutlineLine } from "react-icons/ai";
import { BsCursor } from "react-icons/bs";
import { IoHandLeftOutline } from "react-icons/io5";
import {
  LuArrowDownRight,
  LuCircle,
  LuDiamond,
  LuPenLine,
  LuRectangleHorizontal,
  LuTextCursor,
} from "react-icons/lu";
import { ACTIONS } from "../constants";

export const Actions = ({
  currentAction,
  setCurrentAction,
}: {
  currentAction: string;
  setCurrentAction: (action: string) => void;
}) => {
  //TODO: Revisar el tema de los cursors.
  function handleAction(newAction: string) {
    setCurrentAction(newAction);
  }

  //TODO: Revisar la clase "left-[calc(50vw-232px)]",
  return (
    <div className="absolute z-50 flex top-5 left-[calc(50vw-232px)] gap-x-2 px-5 py-2 rounded-lg shadow-md shadow-black/25">
      <button
        onClick={() => {
          handleAction(ACTIONS.HAND);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md ${
          currentAction === ACTIONS.HAND ? "bg-sky-400" : "hover:bg-sky-300"
        }`}
      >
        <IoHandLeftOutline size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.SELECT);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.SELECT ? "bg-sky-400" : "hover:bg-sky-300"
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
            ? "bg-sky-400"
            : "hover:bg-sky-300"
        }`}
      >
        <LuRectangleHorizontal size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.DIAMOND);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.DIAMOND ? "bg-sky-400" : "hover:bg-sky-300"
        }`}
      >
        <LuDiamond size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.CICLE);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.CICLE ? "bg-sky-400" : "hover:bg-sky-300"
        }`}
      >
        <LuCircle size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.ARROW);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.ARROW ? "bg-sky-400" : "hover:bg-sky-300"
        }`}
      >
        <LuArrowDownRight size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.LINE);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.LINE ? "bg-sky-400" : "hover:bg-sky-300"
        }`}
      >
        <AiOutlineLine size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.DRAW);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.DRAW ? "bg-sky-400" : "hover:bg-sky-300"
        }`}
      >
        <LuPenLine size={16} color="#212529" />
      </button>
      <button
        onClick={() => {
          handleAction(ACTIONS.TEXT);
        }}
        className={`px-3 py-2 transition-colors duration-200 rounded-md  ${
          currentAction === ACTIONS.TEXT ? "bg-sky-400" : "hover:bg-sky-300"
        }`}
      >
        <LuTextCursor size={16} color="#212529" />
      </button>
    </div>
  );
};
