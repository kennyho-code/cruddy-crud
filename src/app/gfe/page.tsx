import Link from "next/link";

const links = [
  { href: "/gfe/counter", label: "Counter" },
  { href: "/gfe/accordion", label: "Accordion" },
];

function Feature3Page() {
  return (
    <div>
      <p>Feature 3 Page</p>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feature3Page;
