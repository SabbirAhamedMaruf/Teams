import Search from "@/core/components/general/Search";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { GoListUnordered } from "react-icons/go";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { LuCloudDownload, LuSettings2 } from "react-icons/lu";

const boards = [
  {
    title: "First Boards",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi eaque quibusdam ipsam ad modi quos. Fugit, ipsam? Nisi atque, aliquid reprehenderit quasi, laborum voluptatibus, molestias illum voluptatum quam soluta amet voluptate dignissimos dicta voluptatem distinctio cumque natus asperiores dolor quae labore optio ipsa? Quia accusamus architecto rerum excepturi eveniet.",
    totolMembers: 50,
    owner: "Sabbir Ahamed Maruf", // who created the boards.
    totalCards: 40,
    // invite button
  },
];

const KanbanBoards = () => {
  return (
    <Box
      background={"#FFFFFF"}
      width={"100%"}
      height={"100%"}
      fontFamily={"Inter"}
      padding={3}
      border={"1px solid #EBEBEB"}
      borderRadius={8}
    >
      <HStack justifyContent={"space-between"}>
        <Button background={"#00070B"} color={"#FFFFFF"}>
          Create New Board
        </Button>
        <Flex gap={2}>
          <Search />
          <Menu>
            <MenuButton
              _active={{
                background: "#00070B",
                color: "#FFFFFF",
              }}
              _hover={{
                background: "#00070B",
                color: "#FFFFFF",
              }}
              as={IconButton}
              aria-label="Sort boards by"
              icon={<Icon as={HiOutlineAdjustmentsHorizontal} fontSize={22} />}
            />
            <MenuList p={2} boxShadow={"lg"} borderRadius={8}>
              <MenuItem>Most visited</MenuItem>
              <MenuItem>Less visited</MenuItem>
              <MenuItem>Alphabetically A~Z</MenuItem>
              <MenuItem>Alphabetically Z~A</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              _active={{
                background: "#00070B",
                color: "#FFFFFF",
              }}
              _hover={{
                background: "#00070B",
                color: "#FFFFFF",
              }}
              as={IconButton}
              aria-label="Change boards view"
              icon={<Icon as={GoListUnordered} fontSize={22} />}
            />
            <MenuList p={2} boxShadow={"lg"} borderRadius={8}>
              <MenuItem>Card</MenuItem>
              <MenuItem>Grid</MenuItem>
              <MenuItem>List</MenuItem>
            </MenuList>
          </Menu>
          <Button fontWeight={550} leftIcon={<Icon as={LuCloudDownload} />}>
            Export
          </Button>
        </Flex>
      </HStack>
    </Box>
  );
};
export default KanbanBoards;
