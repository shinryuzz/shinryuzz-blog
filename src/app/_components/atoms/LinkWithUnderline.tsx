import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  text: string;
};

const LinkWithUnderline = ({ href, text }: Props) => {
  return (
    <Link
      href={href}
      className="text-primary border-b border-primary pb-1 hover:opacity-70"
    >
      {text} &gt;
    </Link>
  );
};

export default LinkWithUnderline;
