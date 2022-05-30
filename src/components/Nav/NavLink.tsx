import React, { MouseEventHandler } from "react";
import { GatsbyLinkProps, Link } from "gatsby";

interface NavLinkProps<T> extends GatsbyLinkProps<T> {
  onClick: MouseEventHandler;
  [x: string]: any;
}

export default function NavLink<T extends NavLinkProps<T>>({
  to,
  onClick,
  children,
  ...rest
}: T) {
  return (
    <Link to={to} activeClassName="active" {...rest} onClick={onClick}>
      {children}
    </Link>
  );
}
