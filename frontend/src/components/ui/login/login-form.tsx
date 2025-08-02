
type LoginFormProps = {
  onLoginSuccess?: () => void;
  className?: string;
  [key: string]: unknown;
};

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginForm(props: LoginFormProps) {
  const { className, onLoginSuccess, ...rest } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        { username, password },
        { withCredentials: true }
      );
      if (response.data.token) {
        // Set username and authToken cookies for dashboard and auth
        Cookies.set("username", username, { path: "/" });
        Cookies.set("authToken", response.data.token, { path: "/" });
        if (onLoginSuccess) {
          onLoginSuccess();
        } else {
          navigate("/list-beneficiaires");
        }
      } else {
        setError("Login failed: No token returned");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.error || "Login failed. Please check your credentials."
        );
      } else {
        setError("Login failed. Please try again.");
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
