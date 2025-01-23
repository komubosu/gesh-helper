'use client';

import { Card, CardBody } from '@heroui/card';
import { Star } from 'lucide-react';
import useSWR from 'swr';

import { fetcher } from '@/shared/api/fetcher';
import { baseApiURL } from '@/shared/model/env';
import { title } from '@/shared/ui/primitives';

export default function PubsPage() {
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
      {data.pubs.map(pub => (
        <li key={pub.id}>
          <Card>
            <CardBody className='space-y-2'>
              <div className='flex items-center justify-between'>
                <h2 className='font-bold text-2xl'>{pub.value.name}</h2>
                <div className='flex h-full items-center gap-1'>
                  <span className='font-medium text-sm'>{pub.value.rage_receipt}</span>
                  <Star size={20} className='fill-current text-yellow-400' />
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-gray-600 text-sm'>{pub.value.work_schedule}</span>
                <span className='font-medium text-sm'>Средний чек: {pub.value.rage_receipt} ₽</span>
              </div>
            </CardBody>
          </Card>
        </li>
      ))}
    </ul>
  );
}
