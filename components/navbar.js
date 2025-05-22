import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  Text,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { FaGithub } from "react-icons/fa";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = "whiteAlpha.900";

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/monokkai/CURRENT-PORTFOLIO-SITE"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          ></LinkItem>
          <LinkItem href="/tools" path={path}>
            Tools
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/monokkai/CURRENT-PORTFOLIO-SITE"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <FaGithub /> GitHub
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem>
                  <NextLink href="/" passHref legacyBehavior>
                    <Link sx={{ color: "whiteAlpha.900" }}>About</Link>
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/works" passHref legacyBehavior>
                    <Link sx={{ color: "whiteAlpha.900" }}>Works</Link>
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/tools" passHref legacyBehavior>
                    <Link sx={{ color: "whiteAlpha.900" }}>Tools</Link>
                  </NextLink>
                </MenuItem>

                <MenuItem
                  as={Link}
                  href="https://github.com/monokkai/CURRENT-PORTFOLIO-SITE"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "whiteAlpha.900" }}
                >
                  <FaGithub />
                  <Text ml={1}>View Source</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
