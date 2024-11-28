'use server';

import { headers } from 'next/headers';

export async function getPathname() {
  return headers().then((h) => h.get('x-url'));
}
