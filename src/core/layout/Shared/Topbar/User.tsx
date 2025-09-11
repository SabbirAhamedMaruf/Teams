import { Button, Flex, Text } from "@chakra-ui/react";
type UserTypes = {
  isCollapsed: boolean;
};
const User = ({ isCollapsed }: UserTypes) => {
  return (
    <Button
      _hover={{
        background: "transparent",
      }}
      width={"100%"}
      background={"transparent"}
      leftIcon={
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          p={0}
          m={0}
          boxSize={35}
          background={"#F5F5F5"}
          borderRadius={"full"}
        >
          S
        </Flex>
      }
    >
      <Flex
        display={isCollapsed ? "none" : "flex"}
        flexDir={"column"}
        textAlign={"left"}
        gap={2}
        py={2}
      >
        <Text
          color={"#000000"}
          fontSize={14}
          fontWeight={550}
          lineHeight={"100%"}
        >
          Sabbir Ahamed Maruf
        </Text>
        <Text
          color={"#BEBEBE"}
          fontSize={12}
          fontWeight={500}
          lineHeight={"100%"}
        >
          example@gmail.com
        </Text>
      </Flex>
    </Button>
  );
};
export default User;
