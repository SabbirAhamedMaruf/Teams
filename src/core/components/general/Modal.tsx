import React from "react";
import type { CSSProperties, FC, ReactNode } from "react";
import { Dialog } from "@chakra-ui/react";

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
} & Omit<React.ComponentProps<typeof Dialog.Root>, "open">;

type ModalChildrenProps = {
  children: ReactNode;
  style?: CSSProperties;
};

type ModalCompType = FC<ModalType> & {
  Header: FC<ModalChildrenProps>;
  Body: FC<ModalChildrenProps>;
  Footer: FC<ModalChildrenProps>;
};

// Root component (use ModalType for props)
const ModalRoot: FC<ModalType> = ({ isOpen, onClose, children, ...props }) => {
  return (
    <Dialog.Root open={isOpen} placement={"center"} {...props}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content background={"#FFFFFF"}>
          <Dialog.CloseTrigger onClick={onClose} />
          {children}
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

// Subcomponents
const Header: FC<ModalChildrenProps> = ({ children, style }) => (
  <Dialog.Header style={{ padding: "8px 12px", ...style }}>
    <Dialog.Title>{children}</Dialog.Title>
  </Dialog.Header>
);

const Body: FC<ModalChildrenProps> = ({ children, style }) => (
  <Dialog.Body style={{ padding: "0px 12px", ...style }}>
    {children}
  </Dialog.Body>
);

const Footer: FC<ModalChildrenProps> = ({ children, style }) => (
  <Dialog.Footer style={{ padding: "8px 12px", ...style }}>
    {children}
  </Dialog.Footer>
);

// Attached subcomponents with modal (root)
const Modal = ModalRoot as ModalCompType;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
