import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Icon,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { teamsMenus, type teamsMenusType } from "../../menus";
import { Link } from "react-router-dom";

type AllMenusTypes = {
  isCollapsed: boolean;
};

const AllMenus = ({ isCollapsed }: AllMenusTypes) => {
  return (
    <VStack gap={2} width={"100%"} align="stretch" spacing={1}>
      <Accordion allowToggle>
        {teamsMenus?.map((menu, index) => (
          <SingleMenu
            key={index}
            data={menu}
            isCollapsed={isCollapsed}
            depth={1}
          />
        ))}
      </Accordion>
    </VStack>
  );
};
export default AllMenus;

type SingleMenuTypes = {
  data: teamsMenusType;
  isCollapsed: boolean;
  depth: number;
};

const SingleMenu: React.FC<SingleMenuTypes> = ({
  data,
  isCollapsed,
  depth,
}) => {
  const { title, redirectUrl, icon, submenus } = data;
  const isSubmenuExists = submenus?.length > 0;

  // Menu button design
  const MenuButton = () => (
    <Tooltip
      isDisabled={!isCollapsed}
      label={title}
      placement="right"
      hasArrow
      background={"#000000"}
      fontSize={13}
      fontWeight={500}
    >
      <Button
        _hover={{
          background: depth === 1 ? "#F5F5F5" : "transparent",
          color: "#000000",
        }}
        width="100%"
        minH={"40px"}
        mb={1}
        px={2}
        background={"transparent"}
        fontSize={15}
        fontWeight={"500"}
        justifyContent={isCollapsed ? "center" : "flex-start"}
        borderRadius={8}
        leftIcon={<Icon as={icon} color="currentcolor" fontSize={22} />}
      >
        {!isCollapsed && title}
      </Button>
    </Tooltip>
  );

  // Single Menu
  if (!isSubmenuExists) {
    return (
      <Link to={redirectUrl}>
        <MenuButton />
      </Link>
    );
  }

  // Menu with submenus
  return (
    <AccordionItem border={"none"}>
      <AccordionButton
        as={Flex}
        p={0}
        _expanded={{
          borderTopRadius: 8,
          borderBottomRadius: isCollapsed ? 0 : 8,
          background: "#F5F5F5",
        }}
        borderRadius={8}
      >
        <MenuButton />
        <AccordionIcon display={!isCollapsed ? "block" : "none"} mr={1} />
      </AccordionButton>
      <AccordionPanel
        width="100%"
        p={0}
        background={isCollapsed ? "#F5F5F5" : "transparent"}
        borderTopRadius={"none"}
        borderBottomRadius={8}
      >
        {submenus.map((submenu, index) => {
          const isLastIndex = submenus.length - 1 === index;
          return (
            <Box
              ml={isCollapsed ? 0 : "18px"}
              key={index}
              position="relative"
              _before={{
                content: '""',
                display: isCollapsed ? "none" : "block",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "2px",
                height: "100%",
                bgGradient: isLastIndex
                  ? "linear(to bottom, #EBEBEB 50%, transparent 50%)"
                  : "linear(to bottom, #EBEBEB 100%, #EBEBEB 100%)",
              }}
            >
              <SingleMenu
                data={submenu}
                isCollapsed={isCollapsed}
                depth={depth + 1}
              />
            </Box>
          );
        })}
      </AccordionPanel>
    </AccordionItem>
  );
};
