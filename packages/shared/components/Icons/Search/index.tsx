import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Search(props: SvgProps) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fill="#fff"
        d="M14.293 16.707a1 1 0 011.414-1.414l4 4a1 1 0 01-1.414 1.414l-4-4z"
        opacity={0.3}
      />
      <Path
        fill="#fff"
        d="M4 11a7 7 0 1014 0 7 7 0 00-14 0zm12 0a5 5 0 11-10 0 5 5 0 0110 0z"
      />
    </Svg>
  );
}

export default Search;
