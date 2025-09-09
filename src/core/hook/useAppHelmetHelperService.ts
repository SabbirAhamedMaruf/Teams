import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useAppHelmetHelperService = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    let title: string;
    if (pathname === "/") {
      title = "Dashboard";
    } else {
      const currentPath = pathname.split("/").at(1) || "";
      title = currentPath
        ?.charAt(0)
        ?.toUpperCase()
        ?.concat(currentPath?.slice(1));
    }
    document.title = `Teams | ${title}`;
  }, [pathname]);
};

export default useAppHelmetHelperService;
