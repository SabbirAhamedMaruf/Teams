import { Accordion, Button, Span, VStack } from "@chakra-ui/react";
import { teamsMenus, type teamsMenusType } from "../../menus";
import { Link } from "react-router-dom";

type AllMenusType = {
  isCollapsed: boolean;
};

const AllMenus = ({ isCollapsed }: AllMenusType) => {
  return (
    <VStack width={"100%"}>
      <Accordion.Root
        display={"flex"}
        flexDir={"column"}
        width={"100%"}
        collapsible
      >
        {Array?.isArray(teamsMenus) &&
          teamsMenus?.length &&
          teamsMenus?.map((menu, index) => (
            <SingleMenu
              key={index}
              menuData={menu}
              isCollapsed={isCollapsed}
              depth={1}
            />
          ))}
      </Accordion.Root>
    </VStack>
  );
};

export default AllMenus;

type SingleMenuType = {
  menuData: teamsMenusType;
  isCollapsed: boolean;
  depth: number;
};

const SingleMenu = ({ menuData, depth = 1, isCollapsed }: SingleMenuType) => {
  const {
    title,
    redirectUrl,
    icon: Icon,
    collapsedTooltip,
    submenus,
  } = menuData || {};

  const isSubmenuExits = submenus?.length > 0;

  return (
    <>
      {!isSubmenuExits ? (
        <Link to={redirectUrl}>
          <Button
            width={"100%"}
            fontSize={20}
            justifyContent={isCollapsed ? "center" : "flex-start"}
          >
            {Icon && <Icon />}
            {!isCollapsed && title}
          </Button>
        </Link>
      ) : (
        <Accordion.Item value={redirectUrl} borderBottom={"none"}>
          <Accordion.ItemTrigger
            width={"100%"}
            minH={"38px"}
            justifyContent={isCollapsed ? "center" : "space-between"}
          >
            <Span
              fontSize={20}
              display={"inline-flex"}
              alignItems={"center"}
              gap={2}
            >
              {Icon && <Icon />}
              {!isCollapsed && title}
            </Span>
            {!isCollapsed && <Accordion.ItemIndicator />}
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody display={"flex"} flexDir={"column"} ml={2}>
              {submenus?.map((submenu, index) => (
                <SingleMenu
                  key={index}
                  menuData={submenu}
                  isCollapsed={isCollapsed}
                  depth={depth + 1}
                />
              ))}
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      )}
    </>
  );
};
