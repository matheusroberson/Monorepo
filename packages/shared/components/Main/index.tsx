import * as React from "react";
import Svg, { SvgProps, Rect } from "react-native-svg";

function Main(props: SvgProps) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 32 32"
    >
      <Rect width={12.5} height={12.5} x={1} y={1} fill="#0047BB" rx={2} />
      <Rect
        width={12.5}
        height={12.5}
        x={1}
        y={18.5}
        fill="#0047BB"
        opacity={0.6}
        rx={2}
      />
      <Rect
        width={12.5}
        height={12.5}
        x={18.5}
        y={1}
        fill="#0047BB"
        opacity={0.6}
        rx={2}
      />
      <Rect
        width={12.5}
        height={12.5}
        x={18.5}
        y={18.5}
        fill="#0047BB"
        opacity={0.6}
        rx={2}
      />
    </Svg>
  );
}

export default Main;
