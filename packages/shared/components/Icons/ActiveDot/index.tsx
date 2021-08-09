import * as React from "react";
import Svg, { SvgProps, Path, Ellipse } from "react-native-svg";

function ActiveDot(props: SvgProps) {
  return (
    <Svg
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 19 20"
      {...props}
    >
      <Path
        fill="#fff"
        stroke="#0047BB"
        d="M17.728 10.273c0 4.663-3.75 8.43-8.359 8.43-4.61 0-8.359-3.767-8.359-8.43s3.75-8.43 8.36-8.43c4.609 0 8.358 3.767 8.358 8.43z"
      />
      <Ellipse cx={9.369} cy={10.273} fill="#0047BB" rx={3.12} ry={3.144} />
    </Svg>
  );
}

export default ActiveDot;
