'use server';

import 'server-only';

export async function setUserCookie() {
  let a = 2;
  a += 2;
  return a;
  /* const cookieStore = cookies();
  const loggedIn = cookieStore.get('loggedIn');
  if (!loggedIn) {
    cookieStore.set('loggedIn', 'true');
  } else if (loggedIn?.value === 'true') {
    cookieStore.set('loggedIn', 'false');
  } else {
    cookieStore.set('loggedIn', 'true');
  } */
}
