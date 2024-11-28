'use client';

import useDarkMode from '@/hooks/useDarkMode';
import { cn } from '@/lib/utils';
import { updateUiLanguage } from '@/server/actions/users/updateUserUiLanguage';
import { AllowedLocale } from '@/types/enums/allowed-locale.enum';
import { Separator } from '@radix-ui/react-separator';
import {
  Backpack,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  ClipboardList,
  House,
  Languages,
  Menu,
  Moon,
  Sun,
  TentTree,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { DebugButtons } from '../admin/debug.buttons';
import { useContextUser, useGlobalContext, useTranslation } from '../contexts/global.client.context';
import { Button } from '../ui/button';
import { SideBarButton } from './SideBarButton';

export function Sidebar() {
  const {
    ui: {
      sidebar: { expanded, setExpanded },
      loading,
    },
  } = useGlobalContext();
  const t = useTranslation();
  const { uiLocale } = useContextUser();
  const router = useRouter();
  const { toggleTheme, isDarkModeEnabled } = useDarkMode();
  const className = cn('w-full flex flex-row', { 'justify-start': expanded });
  const pathname = usePathname();

  if (loading) {
    return loading;
  }

  return (
    <>
      <div
        className={cn(
          'h-screen bg-slate-50 dark:bg-slate-800 w-12 border-r-2 items-start flex-col justify-between animate-in duration-200 hidden md:flex',
          {
            'w-40': expanded,
          },
        )}
        style={{
          transition: 'width 0.2s',
        }}
      >
        <div className="flex flex-col px-2 gap-2 w-full pt-2">
          <Link href={'/'} className="w-full flex items-center justify-center">
            <Image src={'/icons/dice-d20.svg'} alt="Main Page" className="dark:hidden" width={48} height={48} />
            <Image
              src={'/icons/dice-d20-dark.svg'}
              alt="Main Page"
              className="hidden dark:block"
              width={48}
              height={48}
            />
          </Link>

          <Separator orientation="horizontal" />
          <SideBarButton
            {...{
              expanded,
              className,
              title: t.sidebar.home,
              isActive: pathname === '/',
            }}
          >
            <House />
          </SideBarButton>
          <SideBarButton
            {...{
              expanded,
              className,
              title: t.sidebar.users,
              href: '/users',
              isActive: pathname.includes('users'),
            }}
          >
            <Users />
          </SideBarButton>
          <SideBarButton
            {...{
              expanded,
              className,
              title: t.sidebar.characters,
              href: '/characters',
              isActive: pathname.includes('characters'),
            }}
          >
            <ClipboardList />
          </SideBarButton>
          <SideBarButton
            {...{
              expanded,
              className,
              title: t.sidebar.campaigns,
              href: '/campaigns',
              isActive: pathname.includes('campaigns'),
            }}
          >
            <TentTree />
          </SideBarButton>
          <SideBarButton
            {...{
              expanded,
              className,
              title: t.sidebar.items,
              href: '/items',
              isActive: pathname.includes('items'),
            }}
          >
            <Backpack />
          </SideBarButton>

          <Separator orientation="horizontal" />
        </div>
        <div className="flex flex-col px-2 gap-2 w-full">
          <DebugButtons className={className} />

          <SideBarButton
            {...{
              expanded,
              className,
              title: t.sidebar.theme,
              href: '#',
              onClick: () => {
                toggleTheme();
              },
            }}
          >
            {isDarkModeEnabled ? <Sun /> : <Moon />}
          </SideBarButton>
          <SideBarButton
            {...{
              expanded,
              className,
              title: t.sidebar.language,
              href: '#',
              onClick: () => {
                // TODO: Dropdown
                updateUiLanguage(uiLocale === AllowedLocale.en ? AllowedLocale.ru : AllowedLocale.en).then(
                  router.refresh,
                );
              },
            }}
          >
            <Languages />
          </SideBarButton>
          <SideBarButton
            {...{
              expanded,
              className,
              title: t.sidebar.profile,
              href: '/profile',
              isActive: pathname.includes('profile'),
            }}
          >
            <CircleUserRound />
          </SideBarButton>
          <Button variant="ghost" className={className} onClick={() => setExpanded((prev) => !prev)}>
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </Button>
        </div>
      </div>
      <div className="md:hidden absolute top-0 w-full h-12 bg-white dark:bg-slate-950">
        <div className="absolute top-4 left-2">
          <Menu />
        </div>
      </div>
    </>
  );
}
