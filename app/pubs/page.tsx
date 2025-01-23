'use client';

import { Card, CardBody } from '@heroui/card';
import { ScrollShadow } from '@heroui/scroll-shadow';
import { Skeleton } from '@heroui/skeleton';
import { Star } from 'lucide-react';
import useSWR from 'swr';

import { fetcher } from '@/shared/api/fetcher';
import { baseApiURL } from '@/shared/model/env';
import { title } from '@/shared/ui/primitives';

export default function PubsPage() {
  const { data, isLoading, error } = useSWR(baseApiURL, fetcher);

  if (isLoading)
    return (
      <ScrollShadow className='h-full px-4'>
        <ul className='space-y-4'>
          <li>
            <Card className='space-y-6 p-3' radius='lg'>
              <div className='flex items-center justify-between'>
                <Skeleton className='w-3/5 rounded-lg'>
                  <div className='h-8 w-3/5 rounded-lg bg-default-300' />
                </Skeleton>
                <Skeleton className='w-1/5 rounded-lg'>
                  <div className='h-8 w-1/5 rounded-lg bg-default-200' />
                </Skeleton>
              </div>
              <div className='flex items-center justify-between'>
                <Skeleton className='w-3/6 rounded-lg'>
                  <div className='h-5 w-3/6 rounded-lg bg-default-200' />
                </Skeleton>
                <Skeleton className='w-2/6 rounded-lg'>
                  <div className='h-5 w-2/6 rounded-lg bg-default-200' />
                </Skeleton>
              </div>
            </Card>
          </li>
          <li>
            <Card className='space-y-6 p-3' radius='lg'>
              <div className='flex items-center justify-between'>
                <Skeleton className='w-3/5 rounded-lg'>
                  <div className='h-8 w-3/5 rounded-lg bg-default-300' />
                </Skeleton>
                <Skeleton className='w-1/5 rounded-lg'>
                  <div className='h-8 w-1/5 rounded-lg bg-default-200' />
                </Skeleton>
              </div>
              <div className='flex items-center justify-between'>
                <Skeleton className='w-3/6 rounded-lg'>
                  <div className='h-5 w-3/6 rounded-lg bg-default-200' />
                </Skeleton>
                <Skeleton className='w-2/6 rounded-lg'>
                  <div className='h-5 w-2/6 rounded-lg bg-default-200' />
                </Skeleton>
              </div>
            </Card>
          </li>
          <li>
            <Card className='space-y-6 p-3' radius='lg'>
              <div className='flex items-center justify-between'>
                <Skeleton className='w-3/5 rounded-lg'>
                  <div className='h-8 w-3/5 rounded-lg bg-default-300' />
                </Skeleton>
                <Skeleton className='w-1/5 rounded-lg'>
                  <div className='h-8 w-1/5 rounded-lg bg-default-200' />
                </Skeleton>
              </div>
              <div className='flex items-center justify-between'>
                <Skeleton className='w-3/6 rounded-lg'>
                  <div className='h-5 w-3/6 rounded-lg bg-default-200' />
                </Skeleton>
                <Skeleton className='w-2/6 rounded-lg'>
                  <div className='h-5 w-2/6 rounded-lg bg-default-200' />
                </Skeleton>
              </div>
            </Card>
          </li>
        </ul>
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
            <Card radius='lg'>
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
    </ScrollShadow>
  );
}
