import { Breadcrumb, Flex } from "@chakra-ui/react";
import { HiMiniSlash } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import { routes as allTeamRoutes } from "../../../routes/routes";
import type { TeamRoute } from "../../../routes/routes";
import { useMemo } from "react";

const findBreadcrumbTrail = (pathname: string, routes: TeamRoute[]): { name: string; path: string }[] => {
  const segments = pathname.split("/").filter(Boolean);
  const breadCrumbArr: { name: string; path: string }[] = [];
  let currentRoutes = routes;
  let currentPath = "";

  for (const segment of segments) {
    currentPath += `/${segment}`;
    const match = currentRoutes.find((route) => route.path === segment || route.path === `/${segment}`);
    if (match) {
      breadCrumbArr.push({
        name: match.elementName,
        path: currentPath,
      });
      if (match.children) {
        currentRoutes = match.children;
      }
    }
  }

  return breadCrumbArr;
};

const TeamBreadCrumb = () => {
  const location = useLocation();

  const breadcrumbs = useMemo(() => {
    if (location.pathname === "/") {
      return [{ name: "Dashboard", path: "/" }];
    }
    return findBreadcrumbTrail(location.pathname, allTeamRoutes);
  }, [location.pathname]);

  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        {breadcrumbs.map((crumb, idx) => (
          <Breadcrumb.Item key={idx}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={2} fontSize={20} fontWeight={600}>
              <Breadcrumb.Link href={crumb.path}>{crumb.name}</Breadcrumb.Link>
              <HiMiniSlash />
            </Flex>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
};

export default TeamBreadCrumb;
