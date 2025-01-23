'use client';

import { Card, CardBody, CardHeader } from '@heroui/card';
import { CheckCircle, XCircle } from 'lucide-react';
import useSWR from 'swr';

import { fetcher } from '@/shared/api/fetcher';
import { baseApiURL } from '@/shared/model/env';
import { title } from '@/shared/ui/primitives';

export default function SectorsPages() {
  const { data, isLoading, error } = useSWR(baseApiURL, fetcher);

  if (isLoading)
    return (
      <div className='flex h-full items-center justify-center'>
        <p className={title({ color: 'blue' })}>Загружаем...</p>
      </div>
    );

  if (error || !data)
    return (
      <div className='flex h-full items-center justify-center'>
        <p className={title({ color: 'pink' })}>Ошибочка :(</p>
      </div>
    );

  return (
    <ul className='space-y-4'>
      {data.sector.map(sector => (
        <li key={sector.id}>
          <Card>
            <CardHeader>
              <h2 className='font-bold text-2xl'>{sector.value.name_sector}</h2>
            </CardHeader>
            <CardBody>
              <ul className='space-y-2'>
                {sector.value.lifts.map((lift, index) => (
                  <li className='flex items-center justify-between' key={index}>
                    <span>{lift.name}</span>
                    {lift.is_work ? <CheckCircle className='text-green-500' /> : <XCircle className='text-red-500' />}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </li>
      ))}
    </ul>
  );
}
