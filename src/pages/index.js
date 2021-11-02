import React from 'react';
import { Parallax } from '@react-spring/parallax';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import PostList from '../components/PostList';

const IndexPage = () => (
  <Layout>
    <Parallax pages={7}>
      <Hero offset={0} />
      <Projects offset={1} />
      <About offset={3} />
      <PostList offset={4} />
      <Contact offset={6} />
    </Parallax>
  </Layout>
);

export default IndexPage;
