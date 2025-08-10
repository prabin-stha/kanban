import { Link } from "@tanstack/react-router";

import { UserMenu } from "./user-menu";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  const links = [{ to: "/", label: "kanban" }];

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 py-1 container mx-auto">
        <nav className="flex gap-4 text-lg">
          {links.map(({ to, label }) => {
            return (
              <Link key={to} to={to}>
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <UserMenu />
        </div>
      </div>
      <hr />
    </div>
  );
}
