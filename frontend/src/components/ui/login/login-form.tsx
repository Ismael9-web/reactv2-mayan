import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import axios from 'axios';


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function LoginForm(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
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
        navigate("/dashboard");
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
          <CardTitle className="text-xl">Mission</CardTitle>
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
                    name="username"
                    autoComplete="username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <label htmlFor="password">Password</label>
                  </div>
                  <Input
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
