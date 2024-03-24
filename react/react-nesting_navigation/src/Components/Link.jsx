import React from "react";

export default function Link({ children, href, className }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
