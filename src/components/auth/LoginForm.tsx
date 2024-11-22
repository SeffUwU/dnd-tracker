"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signup } from "@/server/actions/auth/signup";
import { HttpStatusCode } from "@/helpers/responses/response.status";
import { toast } from "@/hooks/use-toast";
import { t } from "@/helpers/translation/getTranslation.helper";
import { TextCode } from "@/locale/text.codes";

export default function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const response = await signup({ login, password });

    if (response.is_error) {
      toast({
        variant: "destructive",
        title: t(TextCode.ErrorTitle),
        description: response.message,
      });
      return;
    }

    toast({
      title: t(TextCode.ErrorTitle),
      description: t(TextCode.SignUpSuccess),
    });
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email and password to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full" onClick={register}>
            Login
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
