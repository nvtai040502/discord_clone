"use client";

import { useEffect, useState } from "react";
import { AddAServerModal } from"@/components/modals/add-a-server/index";
import { InvitePeopleModal } from "@/components/modals/invite-people";
import { ServerSettingModal } from "@/components/modals/server-setting";


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
      <InvitePeopleModal />
      <ServerSettingModal />
    </>
  )
}