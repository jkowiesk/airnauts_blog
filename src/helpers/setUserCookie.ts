'use server';

import { cookies } from 'next/headers';

export async function setUserCookie() {
  const cookieStore = cookies();
  const loggedIn = cookieStore.get('loggedIn');
  if (!loggedIn) {
    cookieStore.set('loggedIn', 'true');
  } else if (loggedIn?.value === 'true') {
    cookieStore.set('loggedIn', 'false');
  } else {
    cookieStore.set('loggedIn', 'true');
  }
}
