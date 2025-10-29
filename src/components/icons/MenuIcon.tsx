import { SVGProps } from "react";

export default function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
      aria-hidden="true"
    >
      <path d="M4 12h16"></path>
      <path d="M4 18h16"></path>
      <path d="M4 6h16"></path>
    </svg>
  );
}
