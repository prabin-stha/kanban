import { authClient } from "@/lib/auth-client.lib";
import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: session } = authClient.useSession();

  if (!session) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
}
