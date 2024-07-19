type Link = {
  href: string;
  label: string;
};

const links: Link[] = [
  { href: "/feature-1", label: "Feature 1" },
  { href: "/feature-2", label: "Feature 2" },
  { href: "/feature-3", label: "Feature 3" },
];

function SideBar() {
  return (
    <aside className="bg-green-100 w-[200px] h-screen">
      <nav>
        <ul className="p-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.href}>{link.label}</li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
