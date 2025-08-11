import { useEffect } from "react";
import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";

import { authClient } from "@/lib/auth-client.lib";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: isAuthenticated } = authClient.useSession();

  useEffect(() => {
    const init = async () => {
      if (isAuthenticated) return;

      await authClient.oneTap({
        cancelOnTapOutside: false,
        callbackURL: "/",
      });
    };
    init();
  }, []);

  console.log({ env: import.meta.env, process: process?.env });

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="h-svh flex items-center justify-center">
      <Outlet />
    </div>
  );
}
