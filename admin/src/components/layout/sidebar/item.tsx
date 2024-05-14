"use client";

import React, { useMemo, useState } from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import useHasAccess from "@/hooks/useHasAccess";

interface SidebarItemProps {
  label: string;
  url: string;
  icon?: LucideIcon;
  items?: SidebarItemProps[];
  active_url?: string;
}

const SidebarItem = ({
  label,
  url,
  icon: Icon,
  items,
  active_url,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const isActive = useMemo(() => {
    if (url === "/") {
      return pathname === url;
    }

    if (active_url) {
      return pathname?.includes(active_url);
    }

    // check if the current url is the end of the pathname
    if (pathname?.endsWith(url)) {
      return true;
    }
  }, [pathname, url, active_url]);

  const handleClick = () => {
    if (items) {
      return setExpanded(!expanded);
    }

    router.push(url);
  };

  return (
    <>
      <Button
        variant={isActive ? "default" : "ghost"}
        size="sm"
        className="text-sm font-normal justify-start items-center"
        onClick={handleClick}
      >
        {Icon && <Icon className="mr-2 h-4 w-4" />}
        {label}

        {items && <ChevronDown className="ml-auto h-4 w-4" />}
      </Button>

      {expanded && items && (
        <div className="ml-4 flex flex-col">
          {items.map((item) => (
            <SubItem key={item.url} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItem;

const SubItem = ({ label, url }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = useMemo(() => {
    if (url === "/") {
      return pathname === url;
    }

    return pathname?.includes(url);
  }, [pathname, url]);

  const handleClick = () => {
    router.push(url);
  };

  return (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      size="sm"
      className="text-sm font-normal justify-start items-center"
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};
