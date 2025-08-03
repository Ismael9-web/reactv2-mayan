
type LoginFormProps = {
  onLoginSuccess?: () => void;
  className?: string;
  [key: string]: unknown;
};

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { login } from "../../../../services/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginForm(props: LoginFormProps) {
  const { className, ...rest } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(username, password);
      if (props.onLoginSuccess) {
        props.onLoginSuccess();
      } else {
        navigate("/list-beneficiaires");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Login error:', {
          message: err.message,
          stack: err.stack
        });
        setError(err.message || "Login failed. Please try again.");
      } else {
        console.error('Unknown login error:', err);
        setError("An unexpected error occurred during login.");
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...rest}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">DTG - Opposition</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4"></div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <label htmlFor="username">Username</label>
                  <Input
                    id="username"
                    name="username"
                    autoComplete="username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <label htmlFor="password">Password</label>
                  <Input
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="text-2xl bg-blue-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Login
                </Button>
              </div>
              {error && (
                <div className="text-center text-sm text-red-500">{error}</div>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
