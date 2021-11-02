/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

import Divider from '../elements/divider';
import Inner from '../elements/inner';
import Content from '../elements/content';
import Icon from './Svg';
import { UpDown, UpDownWide } from '../styles/animations';

const data = [
  {
    id: 1,
    name: 'How I built a modern website in 2021',
    description: `For over half of 2021, I worked on a complete rewrite of kentcdodds.com. You're reading this on the rewrite of this site! Are you using dark mode or light mode? Have you signed in and selected your team yet? Have you tried to call into the Call Kent Podcast? This blog post isn't about these and other features of the new site, but how I built it. There's too much to dive deep in a single blog post. I just want to give you an overview of the technologies and libraries I used to make this experience for you.`,
    image:
      'https://kentcdodds.com/img/image/upload/w_2100,q_auto,f_auto,b_rgb:e6e9ee/kentcdodds.com/content/blog/how-i-built-a-modern-website-in-2021/banner_iplhop',
    created: '2017-11-04T18:48:46.250Z',
  },
  {
    id: 2,
    name: 'How I built a modern website in 2021',
    description: `For over half of 2021, I worked on a complete rewrite of kentcdodds.com. You're reading this on the rewrite of this site! Are you using dark mode or light mode? Have you signed in and selected your team yet? Have you tried to call into the Call Kent Podcast? This blog post isn't about these and other features of the new site, but how I built it. There's too much to dive deep in a single blog post. I just want to give you an overview of the technologies and libraries I used to make this experience for you.`,
    image:
      'https://kentcdodds.com/img/image/upload/w_2100,q_auto,f_auto,b_rgb:e6e9ee/kentcdodds.com/content/blog/how-i-built-a-modern-website-in-2021/banner_iplhop',
    created: '2017-11-04T18:48:46.250Z',
  },
  {
    id: 3,
    name: 'How I built a modern website in 2021',
    description: `For over half of 2021, I worked on a complete rewrite of kentcdodds.com. You're reading this on the rewrite of this site! Are you using dark mode or light mode? Have you signed in and selected your team yet? Have you tried to call into the Call Kent Podcast? This blog post isn't about these and other features of the new site, but how I built it. There's too much to dive deep in a single blog post. I just want to give you an overview of the technologies and libraries I used to make this experience for you.`,
    image:
      'https://kentcdodds.com/img/image/upload/w_2100,q_auto,f_auto,b_rgb:e6e9ee/kentcdodds.com/content/blog/how-i-built-a-modern-website-in-2021/banner_iplhop',
    created: '2017-11-04T18:48:46.250Z',
  },
  {
    id: 4,
    name: 'How I built a modern website in 202',
    description: `For over half of 2021, I worked on a complete rewrite of kentcdodds.com. You're reading this on the rewrite of this site! Are you using dark mode or light mode? Have you signed in and selected your team yet? Have you tried to call into the Call Kent Podcast? This blog post isn't about these and other features of the new site, but how I built it. There's too much to dive deep in a single blog post. I just want to give you an overview of the technologies and libraries I used to make this experience for you.`,
    image:
      'https://kentcdodds.com/img/image/upload/w_2100,q_auto,f_auto,b_rgb:e6e9ee/kentcdodds.com/content/blog/how-i-built-a-modern-website-in-2021/banner_iplhop',
    created: '2017-11-04T18:48:46.250Z',
  },
];

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 0.25rem;
  margin-top: 0.5rem;
  margin: 0;
`;

const PostList = ({ offset }) => (
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
        <Title>Blog Post</Title>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(3, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          {data.map((i) => (
            <div className="blog" key={i.id}>
              <h2> {i.name} </h2>
              <Image src={i.image} alt={i.name} />
              <p>{i.satus}</p>
            </div>
          ))}
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

export default PostList;
