'use client';

import useSWR from 'swr';

import { PubCard, PubSkeleton } from '@/entities/pubs';
import { fetcher } from '@/shared/api/fetcher';
import { baseApiURL } from '@/shared/model/env';
import { title } from '@/shared/ui/primitives';
import { ShadowList } from '@/shared/ui/shadow-list';

export default function PubsPage() {
  const { data, isLoading, error } = useSWR(baseApiURL, fetcher);

  if (isLoading)
    return (
      <ShadowList>
        <PubSkeleton />
      </ShadowList>
    );

  if (error || !data)
    return (
      <div className='flex h-full items-center justify-center'>
        <p className={title({ color: 'pink' })}>Ошибочка :(</p>
      </div>
    );

  return (
    <ShadowList>
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
    </ShadowList>
  );
}
