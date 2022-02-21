import {
  Avatar,
  Box,
  Divider,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
  useControllableState,
} from "@chakra-ui/react";

import { FiChevronDown, FiMenu } from "react-icons/fi";
import { EntitiesChange } from "components/Navbar/EntitiesChange";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Logo } from "components/Logo";

export function Navbar({
  appName = "[App Name]",
  entities,
  onClick,
  children,
  ...props
}) {
  const router = useRouter();
  const linkPath = router.asPath.split("/");
  linkPath.shift();
  const [defaultPath] = linkPath;

  const [value, setValue] = useControllableState({
    defaultValue:
      (Array.isArray(entities) &&
        entities.find((entity) => entity.value === defaultPath)?.value) ||
      "",
  });

  useEffect(() => {
    if (defaultPath !== value) {
      router.push(`/${value}`);
    }
  }, [value]);

  return (
    <Box
      position="sticky"
      top="0"
      p={1}
      shadow="lg"
      sx={{ backdropFilter: "blur(10px)" }}
      zIndex={10}
    >
      <Flex flexDir="column" justifyContent="center">
        <SimpleGrid columns={2} w="100%">
          <GridItem display="flex" alignItems="center">
            <IconButton
              bg="none"
              _hover={{ background: "none" }}
              _focus={{ background: "none" }}
              fontSize="2xl"
              icon={<FiMenu />}
              onClick={onClick}
              me={0.5}
            />
            <Heading
              as="h3"
              fontSize={["sm", "2xl"]}
              onClick={onClick}
              cursor="pointer"
            >
              {appName}
            </Heading>
            {entities && (
              <EntitiesChange
                options={entities}
                value={value}
                setValue={setValue}
                title="Localidade"
                ms={2}
                variant="outline"
              />
            )}
          </GridItem>
          <GridItem
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Logo alt="logo" me={[0, 1]} h={[4, 30]} />
            <Divider
              orientation="vertical"
              mx={[2, 4]}
              borderColor="gray.500"
            />
            <Menu autoSelect={false}>
              <MenuButton>
                <Flex alignItems="center">
                  <Flex
                    flexDir="column"
                    alignItems="flex-end"
                    mr={4}
                    display={["none", "flex"]}
                  >
                    <Heading as="h3" size="sm">
                      Rodrigo Lima
                    </Heading>
                    <Text color="brand1">Admin</Text>
                  </Flex>
                  <Avatar size="md" src="https://github.com/rodsl.png" mr={1} />
                  <FiChevronDown />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Payments </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem>Docs</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </GridItem>
        </SimpleGrid>
      </Flex>
      {children && (
        <>
          <Divider my={1} />
          <Flex px={1} alignItems="baseline">
            {children}
          </Flex>
        </>
      )}
    </Box>
  );
}
