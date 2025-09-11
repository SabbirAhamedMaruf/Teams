import { Box, Flex, HStack, IconButton, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { Outlet } from "react-router-dom";
import useAppHelmetHelperService from "../hook/useAppHelmetHelperService";
import AllMenus from "./Shared/Sidebar/AllMenus";
import Brand from "./Shared/Sidebar/Brand";
import TeamBreadCrumb from "./Shared/Topbar/BreadCrumb";
import Notification from "./Shared/Topbar/Notification";
import User from "./Shared/Topbar/User";

const Layout = () => {
  // App helmet service
  useAppHelmetHelperService();

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
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Stack
      justifyContent="space-between"
      width={isCollapsed ? "100px" : "300px"}
      maxW="300px"
      p={3}
      transition="width 0.3s ease-in-out"
      overflow="hidden"
      onAnimationEnd={() => setIsAnimating(false)}
    >
      {/* Brand */}
      <Flex flexDir={"column"} gap={2}>
        <HStack justifyContent={"space-between"}>
          <Brand isCollapsed={isCollapsed} isAnimating={isAnimating} />
          {/* //TODO: Apply toggle button on top of brand logo while hovering */}
          <IconButton
            onClick={() => {
              setIsAnimating(true);
              setIsCollapsed(!isCollapsed);
            }}
            _hover={{
              background: "transparent",
            }}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            background={"transparent"}
            color={"#00070B"}
          >
            {isCollapsed ? (
              <GoSidebarCollapse fontSize={22} />
            ) : (
              <GoSidebarExpand fontSize={22} />
            )}
          </IconButton>
        </HStack>
        {/* <HStack>
          <Search isCollapsed={isCollapsed} />
        </HStack> */}
        <HStack>
          <AllMenus isCollapsed={isCollapsed} />
        </HStack>
      </Flex>
      <HStack>
        <User isCollapsed={isCollapsed} />
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
