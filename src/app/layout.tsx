import { ErrorComponent } from '@/components/errors/ErrorComponent';
import { Sidebar } from '@/components/layout/sidebar';
import { Toaster } from '@/components/ui/toaster';
import { getPathname } from '@/helpers/request/getPathname';
import { checkAuth } from '@/server/actions/auth/check-auth';
import { getUserLocale } from '@/server/actions/users/getUserLocale';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import { redirect } from 'next/navigation';
import './globals.css';
import { ErrorCode } from '@/types/enums/error-code.enum';

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

  if (!auth.is_error && locale.is_error) {
    return <ErrorComponent />;
  }

  return (
    <html lang="en" className="overflow-hidden h-screen">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-row h-full mt-6 md:mt-0`}>
        {!auth.is_error && auth.value && <Sidebar t={locale.value.translation} locale={locale.value.userLocale} />}
        <main className="p-2 w-full overflow-y-scroll">
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
