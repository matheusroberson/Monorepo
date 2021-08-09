import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function History(props: SvgProps) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        stroke="#0047BB"
        d="M21 17a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v2"
        opacity={0.6}
      />
      <Path stroke="#0047BB" d="M6 14l4-4 4 4 7-5" />
    </Svg>
  );
}

export default History;
