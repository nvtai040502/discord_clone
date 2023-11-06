"use client";

import { useEffect, useState } from "react";
import { AddAServerModal } from"@/components/modals/add-a-server/index";
import { InvitePeopleModal } from "@/components/modals/invite-people";
import { ServerSettingModal } from "@/components/modals/server-setting";
import { ManageMembersModal } from "@/components/modals/manage-members";
import { CreateChannelModal } from "@/components/modals/create-channel";
import { DeleteServerModal } from "@/components/modals/delete-server";
import { LeaveServerModal } from "@/components/modals/leave-server";


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
      <ManageMembersModal />
      <CreateChannelModal />
      <DeleteServerModal />
      <LeaveServerModal />
    </>
  )
}