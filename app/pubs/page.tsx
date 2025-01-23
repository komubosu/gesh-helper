'use client';

import { ScrollShadow } from '@heroui/scroll-shadow';
import useSWR from 'swr';

import { PubCard, PubSkeleton } from '@/entities/pubs';
import { fetcher } from '@/shared/api/fetcher';
import { baseApiURL } from '@/shared/model/env';
import { title } from '@/shared/ui/primitives';

export default function PubsPage() {
  const { data, isLoading, error } = useSWR(baseApiURL, fetcher);

  if (isLoading)
    return (
      <ScrollShadow className='h-full px-4'>
        <PubSkeleton />
      </ScrollShadow>
    );

  if (error || !data)
    return (
      <div className='flex h-full items-center justify-center'>
        <p className={title({ color: 'pink' })}>Ошибочка :(</p>
      </div>
    );

  return (
    <ScrollShadow className='h-full px-4'>
      <ul className='space-y-4'>
        {data.pubs.map(pub => (
          <li key={pub.id}>
            <PubCard
              name={pub.value.name}
              recommend={pub.value.recommend}
              workSchedule={pub.value.work_schedule}
              rageReceipt={pub.value.rage_receipt}
            />
          </li>
        ))}
      </ul>
    </ScrollShadow>
  );
}
