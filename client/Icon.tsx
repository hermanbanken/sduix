import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {StyleProp, ViewStyle} from 'react-native';

export interface SVGProps {
  color: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export const HomeIcon = ({color, size, ...otherProps}: SVGProps) => (
  <Svg width={size} height={size} {...otherProps}>
    <Path
      d="M20.813 11.75 19 10.25v-3a.269.269 0 0 0-.25-.25h-1c-.156.031-.25.125-.25.25v1.781l-4.406-3.625c-.25-.218-.75-.375-1.094-.375-.375 0-.875.157-1.125.375L3.156 11.75a.577.577 0 0 0-.156.375c0 .094.031.25.094.313l.344.406c.062.094.25.156.374.156.094 0 .25-.031.313-.094L5 12.187V18c0 .563.438 1 1 1h4c.531 0 .969-.438 1-1v-3.25h2V18c0 .563.438 1 1 1h4c.531 0 .969-.438 1-.969v-5.843l.844.718a.554.554 0 0 0 .312.125c.125 0 .313-.094.407-.187l.312-.406a.555.555 0 0 0 .125-.313c0-.125-.094-.281-.188-.375Zm-3.344 5.75H14.5v-3.25a1.075 1.075 0 0 0-1-1h-3c-.563.031-1 .469-1 1v3.25h-3v-6.531L12 6.438l5.5 4.53-.031 6.532Z"
      fill={color}
    />
  </Svg>
);
