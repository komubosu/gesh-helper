import { Card } from '@heroui/card';
import { Skeleton } from '@heroui/skeleton';

export const PubSkeleton = () => {
  return (
    <>
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
    </>
  );
};
