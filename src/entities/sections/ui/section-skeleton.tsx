import { Card } from '@heroui/card';
import { Skeleton } from '@heroui/skeleton';

export const SectionSkeleton = () => {
  return (
    <ul className='space-y-4'>
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
};
