/** @jsx jsx */
import { jsx } from 'theme-ui';

import Divider from '../../elements/Divider';
import Icon from '../Svg';
import { UpDown, UpDownWide } from '../../styles/animations';

const ShapesHero = ({ offset }) => (
  <Divider speed={0.2} offset={offset}>
    <UpDown>
      <Icon
        icon="triangle"
        hiddenMobile
        width={48}
        stroke
        color="icon_orange"
        left="10%"
        top="20%"
      />
      <Icon
        icon="hexa"
        width={48}
        stroke
        color="icon_red"
        left="60%"
        top="70%"
      />
      <Icon icon="box" width={6} color="icon_darker" left="60%" top="15%" />
    </UpDown>
    <UpDownWide>
      <Icon
        icon="arrowUp"
        hiddenMobile
        width={16}
        color="icon_blue"
        left="80%"
        top="10%"
      />
      <Icon
        icon="triangle"
        width={12}
        stroke
        color="icon_brightest"
        left="90%"
        top="50%"
      />
      <Icon icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
      <Icon
        icon="triangle"
        width={16}
        stroke
        color="icon_darkest"
        left="30%"
        top="65%"
      />
      <Icon
        icon="cross"
        width={16}
        stroke
        color="icon_pink"
        left="28%"
        top="15%"
      />
      <Icon icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
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
      width={24}
      color="icon_darker"
      left="5%"
      top="70%"
    />
    <Icon icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
    <Icon icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
    <Icon icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
    <Icon
      icon="upDown"
      hiddenMobile
      width={24}
      color="icon_darker"
      left="40%"
      top="80%"
    />
    <Icon
      icon="triangle"
      width={8}
      stroke
      color="icon_darker"
      left="25%"
      top="5%"
    />
    <Icon icon="circle" width={64} color="icon_green" left="95%" top="5%" />
    <Icon
      icon="box"
      hiddenMobile
      width={64}
      color="icon_purple"
      left="5%"
      top="90%"
    />
    <Icon icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
    <Icon icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
    <Icon
      icon="hexa"
      width={16}
      stroke
      color="icon_darker"
      left="10%"
      top="50%"
    />
    <Icon
      icon="hexa"
      width={8}
      stroke
      color="icon_darker"
      left="80%"
      top="70%"
    />
  </Divider>
);

export default ShapesHero;
