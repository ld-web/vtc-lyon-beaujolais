import React, { useState } from "react";
import MenuLinks from "./MenuLinks";
import MenuOpen from "./MenuOpen";

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <div>
      <MenuLinks isOpen={open} closeMenuFn={closeMenu} />
      <MenuOpen onClick={openMenu} />
    </div>
  );
}
