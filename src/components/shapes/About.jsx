import React from 'react';

import Divider from '../../elements/Divider';
import Icon from '../Svg';
import { UpDown, UpDownWide } from '../../styles/animations';

const ShapesAbout = ({ offset }) => (
  <>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <Icon
          icon="box"
          hiddenMobile
          width={6}
          color="icon_blue"
          left="50%"
          top="75%"
        />
        <Icon
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="70%"
          top="20%"
        />
        <Icon
          icon="triangle"
          width={8}
          stroke
          color="icon_darkest"
          left="25%"
          top="5%"
        />
        <Icon
          icon="upDown"
          hiddenMobile
          width={24}
          color="icon_orange"
          left="80%"
          top="80%"
        />
      </UpDown>
      <UpDownWide>
        <Icon
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_purple"
          left="5%"
          top="80%"
        />
        <Icon
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="95%"
          top="50%"
        />
        <Icon
          icon="circle"
          hiddenMobile
          width={6}
          color="icon_brightest"
          left="85%"
          top="15%"
        />
        <Icon
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Icon
        icon="circle"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <Icon
        icon="circle"
        width={12}
        color="icon_darkest"
        left="70%"
        top="60%"
      />
      <Icon icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <Icon icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <Icon
        icon="hexa"
        width={8}
        stroke
        color="icon_darkest"
        left="80%"
        top="70%"
      />
    </Divider>
  </>
);

export default ShapesAbout;
