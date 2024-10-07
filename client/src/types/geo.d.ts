type TRect = {
  id: string;
  x: number;
  y: number;
  height: number;
  width: number;
  cornerRadius: number;
  strokeColor: string;
  strokeWidth: number;
  fillColor: string;
};

type TStar = {
  id: string;
  x: number;
  y: number;
  height: number;
  width: number;
  numPoints: number;
  innerRadius: number;
  outerRadius: number;
  strokeColor: string;
  strokeWidth: number;
  fillColor: string;
};

type TCircle = {
  id: string;
  width: number;
  height: number;
  x: number;
  y: number;
  radius: number;
  strokeColor: string;
  strokeWidth: number;
  fillColor: string;
};

type TLine = {
  id: string;
  x: number;
  y: number;
  x2: number;
  y2: number;
  strokeColor: string;
  strokeWidth: number;
};

type TArrow = {
  id: string;
  x: number;
  y: number;
  x2: number;
  y2: number;
  strokeColor: string;
  strokeWidth: number;
};
