/** @jsx jsx */
import { jsx } from 'theme-ui';

import Divider from '../elements/Divider';
import Inner from '../elements/inner';
import Content from '../elements/content';
import Icon from './Svg';
import { UpDown, UpDownWide } from '../styles/animations';

// import Projects MDX

const Projects = ({ offset }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={2}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={2}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          {/* Projects component MDX */}
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <Icon
          icon="box"
          width={6}
          color="icon_brightest"
          left="85%"
          top="75%"
        />
        <Icon icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <Icon
          icon="triangle"
          width={8}
          stroke
          color="icon_orange"
          left="25%"
          top="5%"
        />
        <Icon
          icon="circle"
          hiddenMobile
          width={24}
          color="icon_brightest"
          left="17%"
          top="60%"
        />
      </UpDown>
      <UpDownWide>
        <Icon
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_green"
          left="20%"
          top="90%"
        />
        <Icon
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="90%"
          top="30%"
        />
        <Icon
          icon="circle"
          width={16}
          color="icon_yellow"
          left="70%"
          top="90%"
        />
        <Icon
          icon="triangle"
          hiddenMobile
          width={16}
          stroke
          color="icon_teal"
          left="18%"
          top="75%"
        />
        <Icon
          icon="circle"
          width={6}
          color="icon_brightest"
          left="75%"
          top="10%"
        />
        <Icon
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_green"
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
      <Icon icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <Icon icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <Icon icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <Icon
        icon="hexa"
        width={16}
        stroke
        color="icon_red"
        left="75%"
        top="30%"
      />
      <Icon
        icon="hexa"
        width={8}
        stroke
        color="icon_yellow"
        left="80%"
        top="70%"
      />
    </Divider>
  </div>
);

export default Projects;
