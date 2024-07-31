import Link from "next/link";

const links = [
  { href: "/gfe/counter", label: "Counter" },
  { href: "/gfe/accordion", label: "Accordion" },
  { href: "/gfe/contact-form", label: "Contact Form" },
  { href: "/gfe/flight-booker", label: "Flight Booker" },
  { href: "/gfe/job-stories", label: "Job Stories" },
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
