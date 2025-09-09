import { IconButton, Popover } from "@chakra-ui/react";
import { GoBell } from "react-icons/go";

const Notification = () => {
  return (
    <Popover.Root>
      <Popover.Trigger as={IconButton}>
        <GoBell />
      </Popover.Trigger>

      <Popover.Positioner>
        <Popover.Content>
          <Popover.CloseTrigger />
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Popover.Body>
            <Popover.Title />
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};

export default Notification;
