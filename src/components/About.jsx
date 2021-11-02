import React from 'react';

import Inner from '../elements/inner';
import Content from '../elements/content';
import ShapesAbout from './shapes/about';

import AboutMdx from '../sections/about.mdx';

const About = ({ offset }) => (
  <div>
    <ShapesAbout offset={offset} />
    <Content speed={0.4} offset={offset}>
      <Inner>
        <AboutMdx />
      </Inner>
    </Content>
  </div>
);

export default About;
