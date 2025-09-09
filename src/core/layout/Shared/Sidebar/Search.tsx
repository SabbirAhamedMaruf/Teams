import Modal from "@/core/components/general/Modal";
import { useKeyboardTrigger } from "@/core/hook/useKeyboardTrigger";
import { Box, Flex, Input, Text, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";

type SearchType = {
  isCollapsed: boolean;
};

const Search = ({ isCollapsed }: SearchType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { open, onOpen, onClose } = useDisclosure();
  const [isFocused, setIsFocused] = useState(false);
  useKeyboardTrigger("ctrl+l", () => {
    inputRef.current?.focus();
  });

  return (
    <Flex
      onClick={() => onOpen()}
      justifyContent={"space-around"}
      alignItems={"center"}
      gap={2}
      px={2}
      py={0}
      border={isFocused ? "1px solid #BEBEBE" : "1px solid #EBEBEB"}
      borderRadius={6}
      transition={"all 0.3s ease-in-out"}
    >
      <Box fontSize={"22px"}>
        <IoSearch fill={"#BEBEBE"} />
      </Box>
      <Modal size={"md"} isOpen={open} onClose={onClose}>
        <Modal.Header>
          <Text>Search menus</Text>
        </Modal.Header>
        <Modal.Body>
          <Box></Box>
        </Modal.Body>
      </Modal>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        h={"20px"}
        w={"20px"}
        background={"#F8F8F8"}
        color={"#BEBEBE"}
        fontSize={13}
        border={"1px solid #EBEBEB"}
        borderRadius={4}
        boxShadow={"0px 1px 0px 0px #EBEBEB"}
      >
        K
      </Flex>
    </Flex>
  );
};
export default Search;
