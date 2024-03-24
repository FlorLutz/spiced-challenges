import React from "react";
import Image from "./Image";

export default function Logo({ href, logo }) {
  return (
    <a href={href}>
      <Image className="round-image" src={logo} alt="logo" />
    </a>
  );
}
