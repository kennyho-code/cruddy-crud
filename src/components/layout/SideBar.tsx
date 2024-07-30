"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Link = {
  href: string;
  label: string;
};

const links: Link[] = [
  { href: "/feature-1", label: "Feature 1" },
  { href: "/feature-2", label: "Feature 2" },
  { href: "/gfe", label: "GFE" },
];

function SideBar() {
  const pathName = usePathname();
  return (
    <aside className="bg-green-100 w-[200px] h-screen">
      <nav>
        <ul className="p-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                className={pathName === link.href ? "text-blue-700" : ""}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
