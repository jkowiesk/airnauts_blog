import React from 'react';
import { setUserCookie } from 'helpers/setUserCookie';
import { cookies } from 'next/headers';

export function ArCookieBtn() {
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
