'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getTranslation } from '@/helpers/translation/getTranslation.helper';
import { toast } from '@/hooks/use-toast';
import { signup } from '@/server/actions/auth/signup';
import Link from 'next/link';
import { useState } from 'react';
import { LoadingSpinner } from '../ui/loader';

export default function SignUpForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setIsLoading] = useState(false);
  const t = getTranslation();

  const register = async () => {
    const response = await signup({ login, password });

    if (response.is_error) {
      toast({
        variant: 'destructive',
        title: t.statusMessage.success,
        description: response.message,
      });
      return;
    }

    toast({
      title: t.statusMessage.success,
      description: t.auth.signUpSuccess,
    });
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">{t.general.signUp}</CardTitle>
        <CardDescription>{t.forms.signUp.title}</CardDescription>
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
              value={login}
              onChange={(e) => setLogin(e.target.value)}
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
          <Button type="submit" className="w-full" onClick={register} disabled={loading}>
            {loading ? <LoadingSpinner /> : t.forms.signUp.signUpButton}
          </Button>
          <Link href={'/auth/sign-in'} className="text-sm text-blue-700">
            {t.forms.signUp.loginQuestion}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
