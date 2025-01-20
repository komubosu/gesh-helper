'use client';

import { useEffect } from 'react';

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex h-screen items-center justify-center'>
      <h2>Что-то пошло не так</h2>
      <button type='button' onClick={reset}>
        Попробовать снова
      </button>
    </div>
  );
}
