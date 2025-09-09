import type { IconType } from "react-icons";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";

export type teamsMenusType = {
  title: string;
  redirectUrl: string;
  icon?: IconType;
  collapsedTooltip: string;
  submenus: teamsMenusType[];
};

export const teamsMenus: teamsMenusType[] = [
  {
    title: "Dashboard",
    redirectUrl: "/",
    icon: LuLayoutDashboard,
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
        title: "Settings",
        redirectUrl: "/settings",
        icon: IoSettingsOutline,
        collapsedTooltip: "Manage application settings",
        submenus: [],
      },
      {
        title: "Settings",
        redirectUrl: "/settings",
        icon: IoSettingsOutline,
        collapsedTooltip: "Manage application settings",
        submenus: [],
      },
    ],
  },
];
