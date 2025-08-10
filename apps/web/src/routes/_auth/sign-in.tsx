import z from "zod";
import { toast } from "sonner";
import { useForm } from "@tanstack/react-form";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { authClient } from "@/lib/auth-client.lib";

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate({
    from: "/",
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onSuccess: () => {
            navigate({
              to: "/",
            });
            toast.success("Sign in successful");
          },
          onError: ({ error }) => {
            toast.error(error.message || error.statusText);
          },
        }
      );
    },
    validators: {
      onSubmit: z.object({
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  return (
    <div className="mx-auto w-full max-w-md p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Welcome Back</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <form.Field name="email">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Email</Label>
              <Input
                id={field.name}
                name={field.name}
                type="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.map((error) => (
                <p key={error?.message} className="text-xs text-destructive">
                  {error?.message}
                </p>
              ))}
            </div>
          )}
        </form.Field>

        <form.Field name="password">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Password</Label>
              <Input
                id={field.name}
                name={field.name}
                type="password"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.map((error) => (
                <p key={error?.message} className="text-xs text-destructive">
                  {error?.message}
                </p>
              ))}
            </div>
          )}
        </form.Field>

        <form.Subscribe>
          {(state) => {
            const isFormFieldEmpty =
              !state.values.email || !state.values.password;
            const isDisabled =
              !state.canSubmit || state.isSubmitting || isFormFieldEmpty;

            return (
              <Button type="submit" className="w-full" disabled={isDisabled}>
                {state.isSubmitting ? "Submitting..." : "Sign In"}
              </Button>
            );
          }}
        </form.Subscribe>
      </form>

      <div className="mt-4">
        <Button
          className="w-full"
          onClick={() => {
            authClient.signIn.social({
              provider: "google",
            });
          }}
        >
          Sign In with Google
        </Button>
      </div>

      <div className="mt-4 text-center space-x-1 text-primary">
        <span className="text-sm">Need an account?</span>
        <Button
          variant="link"
          onClick={() => {
            navigate({
              to: "/sign-up",
            });
          }}
          className="p-0"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
