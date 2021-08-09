import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Trash(props: SvgProps) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill="#657786"
        d="M6 8v12.5A1.5 1.5 0 007.5 22h9a1.5 1.5 0 001.5-1.5V8H6z"
      />
      <Path
        fill="#657786"
        d="M14 4.5V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v.5H5.5A.5.5 0 005 5v.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V5a.5.5 0 00-.5-.5H14z"
        opacity={0.3}
      />
    </Svg>
  );
}

export default Trash;
