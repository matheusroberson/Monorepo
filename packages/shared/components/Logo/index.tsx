import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Logo(props: SvgProps) {
  return (
    <Svg width={146} height={146} fill="none" viewBox="0 0 46 46" {...props}>
      <Path
        fill="#0047BB"
        d="M23 46c12.703 0 23-10.297 23-23S35.703 0 23 0 0 10.297 0 23s10.297 23 23 23z"
      />
      <Path
        fill="#fff"
        d="M23.003 33.743a7.148 7.148 0 01-7.154-7.15c0-2.549 1.327-5.28 3.737-7.688.465-.465.973-.901 1.466-1.323l.008-.007a22.207 22.207 0 00-5.088-2.166 24.58 24.58 0 00-5.657-.926v15.416a1.116 1.116 0 01-1.56 1.106 1.119 1.119 0 01-.669-1.106V13.372a1.117 1.117 0 011.117-1.118h.033a25.55 25.55 0 0113.767 3.918 25.617 25.617 0 0113.8-3.918 1.164 1.164 0 011.11 1.117V29.9a1.117 1.117 0 11-2.227 0V14.483a24.58 24.58 0 00-5.655.926 22.222 22.222 0 00-5.09 2.165l.009.007c.491.422 1 .858 1.465 1.322 2.41 2.41 3.737 5.142 3.737 7.689a7.148 7.148 0 01-7.149 7.15zm0-14.917a16.261 16.261 0 00-1.868 1.617c-1.993 2.029-3.088 4.211-3.088 6.146a4.96 4.96 0 109.918 0 6.796 6.796 0 00-.804-3.06c-.6-1.14-1.37-2.182-2.286-3.089a16.297 16.297 0 00-1.872-1.609v-.005z"
      />
    </Svg>
  );
}

export default Logo;
