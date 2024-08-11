import React from "react";

interface MenuBarProps {
  className?: string;
}

function MenuBar({ className }: MenuBarProps) {
  return <div className={className}>MenuBar</div>;
}

export default MenuBar;
