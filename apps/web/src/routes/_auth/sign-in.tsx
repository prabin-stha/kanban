import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Card, CardContent } from "@/components/ui/card";

import { ArrowRight, Plus } from "lucide-react";

import { authClient } from "@/lib/auth-client.lib";

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-background via-card to-muted/30 flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300">
      {/* Linear Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted-foreground/20 via-transparent to-muted-foreground/25 pointer-events-none" />

      {/* Decorative Plus Icons - Behind everything */}
      <div className="absolute inset-0 overflow-hidden z-0 max-w-6xl mx-auto">
        <Plus className="absolute top-32 right-40 w-6 h-6 text-blue-300/60 animate-pulse" />
        <Plus className="absolute bottom-40 right-32 w-4 h-4 text-purple-300/60 animate-pulse delay-1000" />
        <Plus className="absolute top-60 left-40 w-5 h-5 text-green-300/60 animate-pulse delay-500" />
        <Plus className="absolute top-16 left-1/2 w-3 h-3 text-yellow-300/60 animate-pulse delay-700" />
        <Plus className="absolute bottom-20 left-1/3 w-4 h-4 text-pink-300/60 animate-pulse delay-300" />
        <Plus className="absolute top-1/3 right-16 w-5 h-5 text-indigo-300/60 animate-pulse delay-1200" />
        <Plus className="absolute bottom-1/3 left-16 w-3 h-3 text-orange-300/60 animate-pulse delay-900" />
        <Plus className="absolute top-3/4 right-1/4 w-4 h-4 text-teal-300/60 animate-pulse delay-600" />
      </div>

      {/* Main Login Card */}
      <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm shadow-lg border border-border/50 relative z-10 transition-colors duration-300 dark:shadow-2xl dark:shadow-black/40 dark:border-border">
        {/* Theme Toggle Button */}
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>

        <CardContent className="p-8">
          {/* Logo and Header */}
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent text-center mb-8">
            kanban
          </h1>

          {/* Features Preview - More Compact */}
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center group">
                <div className="relative w-12 h-12 mx-auto mb-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="grid grid-cols-2 gap-0.5 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-sm animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-white/70 rounded-sm animate-pulse delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-white/70 rounded-sm animate-pulse delay-200"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-sm animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
                <span className="text-sm font-semibold text-foreground">
                  Organize
                </span>
              </div>

              <div className="text-center group">
                <div className="relative w-12 h-12 mx-auto mb-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 ease-out"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="relative group-hover:scale-110 transition-transform duration-300">
                      <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/80 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>
                </div>
                <span className="text-sm font-semibold text-foreground">
                  Prioritize
                </span>
              </div>

              <div className="text-center group">
                <div className="relative w-12 h-12 mx-auto mb-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-1 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse delay-200"></div>
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse delay-400"></div>
                    </div>
                  </div>
                </div>
                <span className="text-sm font-semibold text-foreground">
                  Collaborate
                </span>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>

          {/* Google Sign In */}
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-6">
                Sign in to start organizing
              </p>
            </div>

            {/* Single Google Sign-In Button */}
            <Button
              className="w-full text-foreground border-1 transition-all duration-200 hover:border-primary/20 group bg-accent/10 hover:bg-accent/20 border-border shadow-md shadow-black/20"
              size="lg"
              onClick={() => {
                authClient.signIn.social({
                  provider: "google",
                  callbackURL: import.meta.env.VITE_WEB_URL,
                });
              }}
            >
              <svg
                className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              <span>By signing in, you agree to our&nbsp;</span>
              <a
                href="#terms"
                className="text-primary hover:underline transition-colors"
              >
                Terms
              </a>
              <span>&nbsp;and&nbsp;</span>
              <a
                href="#privacy-policy"
                className="text-primary hover:underline transition-colors"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </CardContent>

        {/* Floating Kanban Cards */}
        <div className="absolute -top-5 right-10/12 animate-float">
          <Card className="w-48 h-32 bg-card/90 backdrop-blur-sm shadow-md border-l-4 border-l-blue-500 -rotate-2 transition-colors duration-300 dark:shadow-2xl dark:shadow-black/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check-square w-4 h-4 text-blue-500"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <path d="M9 3v18" />
                  <path d="m3 9 6 6 12-12" />
                </svg>
                <span className="text-sm font-medium text-card-foreground">
                  To Do
                </span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-muted rounded"></div>
                <div className="h-2 bg-muted rounded w-3/4"></div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="absolute top-11/12 right-10/12 animate-float-delayed">
          <Card className="w-48 h-32 bg-card/90 backdrop-blur-sm shadow-md border-l-4 border-l-yellow-500 rotate-8 transition-colors duration-300 dark:shadow-2xl dark:shadow-black/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar w-4 h-4 text-yellow-500"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                <span className="text-sm font-medium text-card-foreground">
                  In Progress
                </span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-muted rounded"></div>
                <div className="h-2 bg-muted rounded w-2/3"></div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="absolute bottom-1/3 left-full -translate-x-4 animate-float">
          <Card className="w-48 h-32 bg-card/90 backdrop-blur-sm shadow-md border-l-4 border-l-green-500 rotate-8 transition-colors duration-300 dark:shadow-2xl dark:shadow-black/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users w-4 h-4 text-green-500"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="text-sm font-medium text-card-foreground">
                  Done
                </span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-muted rounded"></div>
                <div className="h-2 bg-muted rounded w-4/5"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Card>
    </div>
  );
}
