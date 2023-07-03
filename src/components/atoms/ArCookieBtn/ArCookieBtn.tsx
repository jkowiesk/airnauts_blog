'use client';

import React from 'react';

export function ArCookieBtn() {
  const fetchCookie = () => {
    fetch('/api', {});
  };
  return (
    <button
      type="submit"
      onClick={() => fetchCookie()}
      className="py-2 px-4 rounded-xl bg-red-200"
    >
      Log In/Out
    </button>
  );
}
