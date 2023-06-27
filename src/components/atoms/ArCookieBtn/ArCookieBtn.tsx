import React from 'react';
import { setUserCookie } from 'helpers/setUserCookie';
import { cookies } from 'next/headers';
import { ArCookieBtnProps } from './ArCookieBtn.types';

export function ArCookieBtn(props: ArCookieBtnProps) {
  console.log(`ArCookieBtn ${props}`);
  const cookieStore = cookies();

  return (
    // @ts-expect-error Server Actions
    <form action={setUserCookie}>
      <button
        type="submit"
        className="py-2 px-4 rounded-xl bg-red-200"
      >
        {cookieStore.get('loggedIn')?.value === 'true' ? 'Logout' : 'Login'}
      </button>
    </form>
  );
}
