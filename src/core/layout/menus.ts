import type { IconType } from "react-icons";
import { FiUser } from "react-icons/fi";
import { GoGoal } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";

export type teamsMenusType = {
  title: string;
  redirectUrl: string;
  icon: IconType;
  collapsedTooltip: string;
  submenus: teamsMenusType[];
};

export const teamsMenus: teamsMenusType[] = [
  {
    title: "Dashboard",
    redirectUrl: "/",
    icon: RxDashboard,
    collapsedTooltip: "Take a look at dashboard",
    submenus: [],
  },
  {
    title: "Boards",
    redirectUrl: "/boards",
    icon: GoGoal,
    collapsedTooltip: "Take a look at dashboard",
    submenus: [],
  },
  {
    title: "Settings",
    redirectUrl: "/settings",
    icon: IoSettingsOutline,
    collapsedTooltip: "Manage application settings",
    submenus: [
      {
        title: "Manage Teams",
        redirectUrl: "/settings/teams",
        icon: LuUsers,
        collapsedTooltip: "Manage application settings",
        submenus: [],
      },
      {
        title: "Profile",
        redirectUrl: "/settings/profile",
        icon: FiUser,
        collapsedTooltip: "Manage application settings",
        submenus: [],
      },
    ],
  },
];
