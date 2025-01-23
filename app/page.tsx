'use client';

import { Card, CardBody, CardHeader } from '@heroui/card';
import { ScrollShadow } from '@heroui/scroll-shadow';
import { CheckCircle, XCircle } from 'lucide-react';
import useSWR from 'swr';

import { fetcher } from '@/shared/api/fetcher';
import { baseApiURL } from '@/shared/model/env';
import { title } from '@/shared/ui/primitives';
import { Skeleton } from '@heroui/skeleton';

export default function SectorsPages() {
  const { data, isLoading, error } = useSWR(baseApiURL, fetcher);

  if (isLoading)
    return (
      <ul className='space-y-4 px-4'>
        <li>
          <Card className='space-y-6 p-3' radius='lg'>
            <Skeleton className='rounded-lg'>
              <div className='h-8 rounded-lg bg-default-300' />
            </Skeleton>
            <div className='space-y-2'>
              <Skeleton className='w-3/5 rounded-lg'>
                <div className='h-6 w-3/5 rounded-lg bg-default-200' />
              </Skeleton>
              <Skeleton className='w-4/5 rounded-lg'>
                <div className='h-6 w-4/5 rounded-lg bg-default-200' />
              </Skeleton>
              <Skeleton className='w-2/5 rounded-lg'>
                <div className='h-6 w-2/5 rounded-lg bg-default-300' />
              </Skeleton>
            </div>
          </Card>
        </li>
        <li>
          <Card className='space-y-6 p-3' radius='lg'>
            <Skeleton className='rounded-lg'>
              <div className='h-8 rounded-lg bg-default-300' />
            </Skeleton>
            <div className='space-y-2'>
              <Skeleton className='w-3/5 rounded-lg'>
                <div className='h-6 w-3/5 rounded-lg bg-default-200' />
              </Skeleton>
              <Skeleton className='w-4/5 rounded-lg'>
                <div className='h-6 w-4/5 rounded-lg bg-default-200' />
              </Skeleton>
              <Skeleton className='w-2/5 rounded-lg'>
                <div className='h-6 w-2/5 rounded-lg bg-default-300' />
              </Skeleton>
              <Skeleton className='w-3/5 rounded-lg'>
                <div className='h-6 w-3/5 rounded-lg bg-default-200' />
              </Skeleton>
            </div>
          </Card>
        </li>
        <li>
          <Card className='space-y-6 p-3' radius='lg'>
            <Skeleton className='rounded-lg'>
              <div className='h-8 rounded-lg bg-default-300' />
            </Skeleton>
            <div className='space-y-2'>
              <Skeleton className='w-2/5 rounded-lg'>
                <div className='h-6 w-2/5 rounded-lg bg-default-300' />
              </Skeleton>
              <Skeleton className='w-3/5 rounded-lg'>
                <div className='h-6 w-3/5 rounded-lg bg-default-200' />
              </Skeleton>
            </div>
          </Card>
        </li>
      </ul>
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
            <Card radius='lg'>
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
    </ScrollShadow>
  );
}
