'use client';

import React from 'react';

export function ArCookieBtn() {
  return (
    <button
      type="submit"
      onClick={() => {
        console.log('xd');
      }}
      className="py-2 px-4 rounded-xl bg-red-300"
    >
      Log In/Out
    </button>
  );
}
