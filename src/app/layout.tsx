import { WrapWithContexts } from '@/components/contexts/WrapAllContexts';
import { setServerLocale, useServerTranslation } from '@/components/contexts/global.server.context';
import { Sidebar } from '@/components/layout/sidebar';
import { Toaster } from '@/components/ui/toaster';
import { getPathname } from '@/helpers/request/getPathname';
import { checkAuth } from '@/server/actions/auth/check-auth';
import { getUserLocale } from '@/server/actions/users/getUserLocale';
import { ErrorCode } from '@/types/enums/error-code.enum';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import { redirect } from 'next/navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'DnD Tracker',
};

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [auth, path, locale] = await Promise.all([checkAuth(), getPathname(), getUserLocale()]);

  if (
    auth.is_error &&
    auth.code === ErrorCode.NotAuthorized &&
    !(path?.includes('auth/sign-in') || path?.includes('auth/sign-up'))
  ) {
    redirect('/auth/sign-in');
  }

  if (!locale.is_error) {
    setServerLocale(locale.value.userLocale);
  }

  const t = useServerTranslation();

  return (
    <html lang="en" className="overflow-hidden h-screen dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-row-reverse h-full mt-12 md:mt-0`}
      >
        <WrapWithContexts locale={t} user={!auth.is_error ? auth.value.user : undefined}>
          <main className="w-full overflow-y-auto">
            {children}
            <Toaster />
          </main>
          {!auth.is_error && auth.value && <Sidebar />}
        </WrapWithContexts>
      </body>
    </html>
  );
}
