import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/header";

import { orpc } from "@/lib/orpc.lib";
import { authClient } from "@/lib/auth-client.lib";

export const Route = createFileRoute("/_protected/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: session } = authClient.useSession();

  const privateData = useQuery(orpc.privateData.queryOptions());

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1>Dashboard</h1>
        <p>Welcome {session?.user.name}</p>
        <pre>{JSON.stringify(privateData.data, null, 2)}</pre>
      </div>
    </>
  );
}
