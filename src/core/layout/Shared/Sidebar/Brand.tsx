import { Flex, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

type BrandType = {
  isCollapsed: boolean;
};

const Brand = ({ isCollapsed }: BrandType) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Flex
      w={"100%"}
      h={"100%"}
      justifyContent={isCollapsed ? "center" : "flex-start"}
      alignItems="center"
      gap={2}
    >
      <Flex
        onClick={() => location?.pathname !== "/" && navigate("/")}
        cursor="pointer"
        justifyContent="center"
        alignItems="center"
        w={"100%"}
        h={"100%"}
        maxW={"40px"}
        maxH={"40px"}
        background="#000000"
        color="#FFFFFF"
        fontSize={25}
        fontFamily="Asimovian"
        fontWeight={600}
        borderRadius={4}
      >
        T
      </Flex>

      <Flex
        flexDir="column"
        overflow="hidden"
        display={isCollapsed ? "none" : "flex"}
        maxW={isCollapsed ? "0px" : "200px"}
        opacity={isCollapsed ? 0 : 1}
        transition="max-width 0.3s ease, opacity 0.3s ease"
      >
        <Text
          color="#000000"
          fontSize={22}
          fontWeight={600}
          lineHeight="22px"
          whiteSpace="nowrap"
        >
          Teams
        </Text>
        <Text
          color="#BEBEBE"
          fontSize={13}
          fontWeight={600}
          lineHeight="22px"
          whiteSpace="nowrap"
        >
          xyz company
        </Text>
      </Flex>
    </Flex>
  );
};

export default Brand;
