import React, { useContext } from 'react';
import iconSet from '../../icomoon.json';
import IcomoonReact from 'icomoon-react';
import { ThemeContext } from 'styled-components';

type LineIconProps = {
  color?: string;
  size?: string | number;
  icon: string;
  className?: string;
};

export const LineIcon: React.FC<LineIconProps> = ({
  color,
  size = '110',
  icon,
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <IcomoonReact
      iconSet={iconSet}
      color={color ? color : themeContext.textThird}
      size={size}
      icon={icon}
    />
  );
};
