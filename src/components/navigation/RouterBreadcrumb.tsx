import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AnyRouteMatch, Link, useMatches } from "@tanstack/react-router";
import { Fragment } from "react";

export type BreadcrumbValue =
  | string
  | string[]
  | ((match: AnyRouteMatch) => string | string[]);

type ResolvedBreadcrumbItem = {
  path: string;
  label: string;
};

export function RouterBreadcrumb() {
  const matches = useMatches();

  const breadcrumbs: ResolvedBreadcrumbItem[] = matches.flatMap((match) => {
    const staticData = match.staticData;
    if (!staticData?.breadcrumb) return [];

    const breadcrumbValue =
      typeof staticData.breadcrumb === "function"
        ? staticData.breadcrumb(match)
        : staticData.breadcrumb;

    const items = Array.isArray(breadcrumbValue)
      ? breadcrumbValue
      : [breadcrumbValue];

    return items.map((item) => ({
      label: item,
      path: match.pathname,
    }));
  });

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <Fragment key={`${crumb.path}-${index}`}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={crumb.path}>{crumb.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
