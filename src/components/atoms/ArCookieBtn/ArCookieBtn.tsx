import React from 'react';
import { setUserCookie } from 'helpers/setUserCookie';

export function ArCookieBtn() {
  return (
    // @ts-expect-error Server Actions
    <form action={setUserCookie}>
      <button
        type="submit"
        className="py-2 px-4 rounded-xl bg-red-200"
      >
        Log In/Out
      </button>
    </form>
  );
}
