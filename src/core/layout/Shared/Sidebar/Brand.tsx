import { Box, Flex, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

type BrandType = {
  isCollapsed: boolean;
};

const Brand = ({ isCollapsed }: BrandType) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
      <Flex
        onClick={() => location?.pathname !== "/" && navigate("/")}
        cursor={"pointer"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"45px"}
        width={"45px"}
        background={"#000000"}
        color={"#FFFFFF"}
        fontSize={25}
        fontFamily={"Asimovian"}
        fontWeight={600}
      >
        T
      </Flex>
      <Box display={isCollapsed ? "none" : "block"}>
        <Text fontSize={25} fontWeight={600} lineHeight={"22px"}>
          Teams
        </Text>
        <Text
          color={"#BEBEBE"}
          fontSize={13}
          fontWeight={600}
          lineHeight={"22px"}
        >
          xyz company
        </Text>
      </Box>
    </Flex>
  );
};
export default Brand;
