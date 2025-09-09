import { Accordion, Button, Span, VStack } from "@chakra-ui/react";
import { teamsMenus, type teamsMenusType } from "../../menus";
import { Link } from "react-router-dom";
const AllMenus = () => {
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
            <SingleMenu key={index} menuData={menu} depth={1} />
          ))}
      </Accordion.Root>
    </VStack>
  );
};

export default AllMenus;

type SingleMenuType = {
  menuData: teamsMenusType;
  depth: number;
};

const SingleMenu = ({ menuData, depth = 1 }: SingleMenuType) => {
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
          <Button>
            {Icon && <Icon />}
            {title}
          </Button>
        </Link>
      ) : (
        <Accordion.Item value={redirectUrl} borderBottom={"none"}>
          <Accordion.ItemTrigger
            justifyContent={"space-between"}
            width={"100%"}
            border={"1px solid red"}
          >
            <Span display={"inline-flex"} alignItems={"center"} gap={2}>
              {Icon && <Icon />}
              {title}
            </Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody display={"flex"} flexDir={"column"} ml={2}>
              {submenus?.map((submenu, index) => (
                <SingleMenu key={index} menuData={submenu} depth={depth + 1} />
              ))}
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      )}
    </>
  );
};
