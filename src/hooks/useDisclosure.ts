import { useEffect, useState } from "react";

interface useDisclosureProps {
  onOpen: () => void;
  onClose: () => void;
}

export const useDisclosure = (
  initialState = false,
  { onClose, onOpen }: useDisclosureProps
) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    if (isOpen !== initialState) {
      setIsOpen(initialState);
    }
  }, [initialState]);

  const open = () => {
    setIsOpen(true);
    if (typeof onOpen === "function") {
      onOpen();
    }
  };

  const close = () => {
    setIsOpen(false);
    if (typeof onClose === "function") {
      onClose();
    }
  };

  const toggle = setIsOpen((prev) => !prev);

  return { isOpen, open, close, toggle };
};
