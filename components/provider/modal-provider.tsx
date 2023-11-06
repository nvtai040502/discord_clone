"use client";

import { useEffect, useState } from "react";
import { AddAServerModal } from"@/components/modals/add-a-server/index";


export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AddAServerModal />
    </>
  )
}