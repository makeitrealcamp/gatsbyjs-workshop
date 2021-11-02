/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Themed, Flex, useColorMode } from 'theme-ui';

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e) => {
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <footer>
      <button
        sx={{
          variant: `buttons.toggle`,
          fontWeight: `semibold`,
          display: `block`,
          mx: `auto`,
          mb: 3,
        }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <span role="img" aria-label="emoji">
          👨🏼‍💻
        </span>
        {` `}
        <Themed.a
          aria-label="Link to the project's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/makeitrealcamp/gatsbyjs-workshop"
        >
          Repository
        </Themed.a>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Themed.a
          aria-label="Link to the workshop author's website"
          href="https://www.khriztianmoreno.dev"
        >
          @khriztianmoreno
        </Themed.a>
      </Flex>
    </footer>
  );
};

export default Footer;
