import { Box, Flex, HStack, IconButton, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Brand from "./Shared/Sidebar/Brand";
import TeamBreadCrumb from "./Shared/Topbar/BreadCrumb";
import Notification from "./Shared/Topbar/Notification";
import User from "./Shared/Topbar/User";
import Search from "./Shared/Sidebar/Search";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AllMenus from "./Shared/Sidebar/AllMenus";

const Layout = () => {
  return (
    <Flex minH="100vh" maxW="100vw" background={"#FFFFFF"}>
      <Sidebar />
      <Box width="100%" h="100%">
        <Topbar />
        <Box h="calc(100vh - 50px)" w="100%" p={5} bg="#F8F8F8">
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};
export default Layout;

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  console.log("Log => | Sidebar | isCollapsed:", isCollapsed);

  return (
    <Stack
      minW={isCollapsed ? "100px" : "300px"}
      maxW={"300px"}
      p={2}
      border={"1px solid red"}
    >
      {/* Brand */}
      <HStack>
        <Brand />
        <IconButton
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </IconButton>
      </HStack>
      <HStack>
        <Search />
      </HStack>
      <HStack>
        <AllMenus />
      </HStack>
    </Stack>
  );
};

const Topbar = () => {
  return (
    <Flex
      minH={"50px"}
      maxH={"50px"}
      width={"100%"}
      px={3}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <TeamBreadCrumb />
      <HStack>
        <Notification />
        <User />
      </HStack>
    </Flex>
  );
};
