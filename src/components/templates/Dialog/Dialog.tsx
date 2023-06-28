'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { DialogProps } from './Dialog.types';

export function Dialog({ children }: DialogProps) {
  const router = useRouter();
  return (
    <dialog
      open
      className="inset-0 m-auto w-4/5 md:w-3/4 lg:w-1/2 h-3/4 overflow-y-scroll overflow-x-hidden"
    >
      <button
        type="button"
        onClick={() => {
          router.back();
        }}
      >
        X
      </button>
      {children}
    </dialog>
  );
}
