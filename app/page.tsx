'use client';

import useSWR from 'swr';

import { SectionCard, SectionSkeleton } from '@/entities/sections';
import { fetcher } from '@/shared/api/fetcher';
import { baseApiURL } from '@/shared/model/env';
import { title } from '@/shared/ui/primitives';
import { ShadowList } from '@/shared/ui/shadow-list';

export default function SectorsPages() {
  const { data, isLoading, error } = useSWR(baseApiURL, fetcher);

  if (isLoading)
    return (
      <ShadowList>
        <SectionSkeleton />
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
      {data.sector.map(sector => (
        <li key={sector.id}>
          <SectionCard name={sector.name} lifts={sector.lifts} />
        </li>
      ))}
    </ShadowList>
  );
}
