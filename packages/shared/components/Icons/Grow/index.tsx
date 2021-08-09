import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Grow(props: SvgProps) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <Path
        stroke={props.stroke}
        d="M1 12l4.437-4.564a.857.857 0 011.237 0l1.874 1.927a.857.857 0 001.237 0L15 4"
      />
      <Path stroke={props.stroke} d="M13 4h2v2" />
    </Svg>
  );
}

export default Grow;
