import "../index.css";

import type { QueryClient } from "@tanstack/react-query";

import {
  Outlet,
  HeadContent,
  useRouterState,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Loader } from "@/components/loader";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/theme.provider";

import { orpc } from "@/lib/orpc.lib";
import { authClient } from "@/lib/auth-client.lib";

export interface RouterAppContext {
  orpc: typeof orpc;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "kanban",
      },
      {
        name: "description",
        content: "kanban is a web application",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
});

function RootComponent() {
  const isFetching = useRouterState({
    select: (s) => s.isLoading,
  });
  const { isPending } = authClient.useSession();

  if (isPending || isFetching) {
    return null;
  }

  return (
    <>
      <HeadContent />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        storageKey="vite-ui-theme"
      >
        <Outlet />
        <Toaster richColors />
      </ThemeProvider>
      <TanStackRouterDevtools position="bottom-left" />
      <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
    </>
  );
}
