import { IUser } from '@/entities';
import { AllowedLocale } from '@/types/enums/allowed-locale.enum';
import { WithoutGenerated } from '@/types/utils/utils.types';
import { randFullName } from '@ngneat/falso';

import bcrypt from 'bcrypt';

export const usersFixture: WithoutGenerated<IUser>[] = [
  {
    name: randFullName(),
    login: '1',
    passwordHash: await bcrypt.hash('1', 10),
    locale: AllowedLocale.en,
    uiLocale: AllowedLocale.en,
  },
  {
    name: randFullName(),
    login: '2',
    passwordHash: await bcrypt.hash('2', 10),
    locale: AllowedLocale.en,
    uiLocale: AllowedLocale.en,
  },
  {
    name: randFullName(),
    login: '3',
    passwordHash: await bcrypt.hash('3', 10),
    locale: AllowedLocale.en,
    uiLocale: AllowedLocale.en,
  },
  {
    name: randFullName(),
    login: '4',
    passwordHash: await bcrypt.hash('4', 10),
    locale: AllowedLocale.en,
    uiLocale: AllowedLocale.en,
  },
  {
    name: randFullName(),
    login: '5',
    passwordHash: await bcrypt.hash('5', 10),
    locale: AllowedLocale.en,
    uiLocale: AllowedLocale.en,
  },
  {
    name: randFullName(),
    login: '6',
    passwordHash: await bcrypt.hash('6', 10),
    locale: AllowedLocale.en,
    uiLocale: AllowedLocale.en,
  },
  {
    name: randFullName(),
    login: '7',
    passwordHash: await bcrypt.hash('7', 10),
    locale: AllowedLocale.en,
    uiLocale: AllowedLocale.en,
  },
  {
    name: randFullName(),
    login: '8',
    passwordHash: await bcrypt.hash('8', 10),
    locale: AllowedLocale.en,
    uiLocale: AllowedLocale.en,
  },
  {
    name: randFullName(),
    login: '9',
    passwordHash: await bcrypt.hash('9', 10),
    locale: AllowedLocale.en,
    uiLocale: AllowedLocale.en,
  },
  {
    name: randFullName(),
    login: '10',
    passwordHash: await bcrypt.hash('10', 10),
    locale: AllowedLocale.en,
    uiLocale: AllowedLocale.en,
  },
  {
    name: randFullName(),
    login: '11',
    passwordHash: await bcrypt.hash('11', 10),
    locale: AllowedLocale.en,
    uiLocale: AllowedLocale.en,
  },
  {
    name: randFullName(),
    login: '12',
    passwordHash: await bcrypt.hash('12', 10),
    locale: AllowedLocale.en,
    uiLocale: AllowedLocale.en,
  },
  {
    name: randFullName(),
    login: '13',
    passwordHash: await bcrypt.hash('13', 10),
    locale: AllowedLocale.en,
    uiLocale: AllowedLocale.en,
  },
];
