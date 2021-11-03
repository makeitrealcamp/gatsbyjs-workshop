/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

import Divider from '../elements/Divider';
import Inner from '../elements/inner';
import Content from '../elements/content';
import Icon from './Svg';
import { UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import Footer from './Footer';

// import Contact MDX file;

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`;

const Contact = ({ offset }) => (
  <div>
    <Divider fill="divider" speed={0.2} offset={offset}>
      <div
        sx={{
          position: `absolute`,
          bottom: 0,
          width: `full`,
          transform: `matrix(1, 0, 0, -1, 0, 0)`,
        }}
      >
        <InnerWave
          sx={{
            position: `relative`,
            height: `full`,
            svg: { width: `100%`, height: `40vh` },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="contact-wave"
            viewBox="0 0 800 338.05"
            preserveAspectRatio="none"
          >
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </div>
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>{/* Contact Component MDX  */}</Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset}>
      <UpDown>
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
      </UpDown>
      <UpDownWide>
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
  </div>
);

export default Contact;
