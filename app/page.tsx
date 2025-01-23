'use client';

import { ScrollShadow } from '@heroui/scroll-shadow';
import useSWR from 'swr';

import { SectionCard, SectionSkeleton } from '@/entities/sections';
import { fetcher } from '@/shared/api/fetcher';
import { baseApiURL } from '@/shared/model/env';
import { title } from '@/shared/ui/primitives';

export default function SectorsPages() {
  const { data, isLoading, error } = useSWR(baseApiURL, fetcher);

  if (isLoading)
    return (
      <ScrollShadow className='h-full px-4'>
        <SectionSkeleton />
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
        {data.sector.map(sector => (
          <li key={sector.id}>
            <SectionCard name={sector.value.name_sector} lifts={sector.value.lifts} />
          </li>
        ))}
      </ul>
    </ScrollShadow>
  );
}
