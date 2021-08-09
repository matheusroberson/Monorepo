import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Star(props: SvgProps) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        stroke={props.stroke}
        fill={props.fill}
        d="M12 18l-4.084 2.147a1 1 0 01-1.451-1.054l.78-4.548-3.305-3.22a1 1 0 01.555-1.706l4.566-.664 2.042-4.138a1 1 0 011.794 0l2.042 4.138 4.566.664a1 1 0 01.555 1.705l-3.305 3.221.78 4.548a1 1 0 01-1.45 1.054L12 18z"
      />
    </Svg>
  );
}

export default Star;
