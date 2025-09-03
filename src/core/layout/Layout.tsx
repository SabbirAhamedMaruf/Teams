import { Box, HStack, IconButton, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Brand from "./Shared/Sidebar/Brand";

const Layout = () => {
  return (
    <Box>
      <Sidebar />
      <Box>
        <Topbar />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
export default Layout;

const Sidebar = () => {
  return (
    <Stack>
      {/* Brand */}
      <HStack>
        <Brand />
        <IconButton />
      </HStack>
    </Stack>
  );
};

const Topbar = () => {
  return <Stack></Stack>;
};
