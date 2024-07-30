"use client";
import { useState } from "react";

const data: Section[] = [
  {
    value: "html",
    title: "HTML",
    contents:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    value: "css",
    title: "CSS",
    contents:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    value: "javascript",
    title: "JavaScript",
    contents:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

type Section = {
  value: string;
  title: string;
  contents: string;
};

function AccordionPage() {
  return (
    <div>
      <Accordion className="w-[500px]" sections={data} />
    </div>
  );
}

function Accordion({
  sections,
  className,
}: {
  sections: Section[];
  className?: string;
}) {
  return (
    <div className={className}>
      {sections.map((section) => (
        <Section key={section.value} section={section} />
      ))}
    </div>
  );
}

function Section({ section, key }: { section: Section; key: string }) {
  const [clicked, setClicked] = useState(false);
  return (
    <article key={key} className="border-b">
      <button
        onClick={() => setClicked(!clicked)}
        className="w-full flex justify-between hover:bg-slate-300 p-4"
      >
        <h1>{section.title}</h1>
        <div>{clicked ? <span>🔼</span> : <span>🔽 </span>}</div>
      </button>
      <p aria-hidden={!clicked} hidden={!clicked} className="p-4">
        {section.contents}
      </p>
    </article>
  );
}

export default AccordionPage;
