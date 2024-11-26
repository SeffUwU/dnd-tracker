'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getTranslation } from '@/helpers/translation/getTranslation.helper';
import { toast } from '@/hooks/use-toast';
import { login } from '@/server/actions/auth/login';
import Link from 'next/link';
import { useState } from 'react';
import { LoadingSpinner } from '../ui/loader';
import { isRedirectError } from 'next/dist/client/components/redirect';

export default function LoginForm() {
  const [loginString, setLoginString] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setIsLoading] = useState(false);
  const t = getTranslation();

  const loginFn = async () => {
    try {
      setIsLoading(true);
      const response = await login({ login: loginString, password });

      if (response.is_error) {
        toast({
          variant: 'destructive',
          title: t.statusMessage.error,
          description: response.message,
        });
        return;
      }

      toast({
        title: t.statusMessage.success,
        description: t.auth.signInSuccess,
      });
    } catch (err) {
      if (!isRedirectError(err)) {
        toast({
          variant: 'destructive',
          title: t.statusMessage.error,
          description: 'Something went wrong',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">{t.general.login}</CardTitle>
        <CardDescription>{t.forms.login.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t.general.email}</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              value={loginString}
              onChange={(e) => setLoginString(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{t.general.password}</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
          <Button type="submit" className="w-full" onClick={loginFn} disabled={loading}>
            {loading ? <LoadingSpinner /> : t.forms.login.loginButton}
          </Button>
          <Link href={'/auth/sign-up'} className="text-sm text-blue-700">
            {t.forms.login.registerQuestion}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
