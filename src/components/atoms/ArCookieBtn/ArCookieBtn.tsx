'use client';

import React from 'react';
import { setUserCookie } from 'helpers/setUserCookie';

export function ArCookieBtn() {
  return (
    <button
      type="submit"
      onClick={() => setUserCookie()}
      className="py-2 px-4 rounded-xl bg-red-300"
    >
      Log In/Out
    </button>
  );
}
