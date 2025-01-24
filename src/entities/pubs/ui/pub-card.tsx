import { Card, CardBody } from '@heroui/card';
import { Star } from 'lucide-react';

type PubCardProps = {
  name: string;
  recommend: string;
  workSchedule: string;
  rageReceipt: string;
};

export const PubCard = ({ name, recommend, workSchedule, rageReceipt }: PubCardProps) => {
  return (
    <Card radius='lg'>
      <CardBody className='space-y-2'>
        <div className='flex items-center justify-between'>
          <h2 className='font-bold text-2xl'>{name}</h2>
          <div className='flex h-full items-center gap-1'>
            <span className='font-medium text-sm'>{recommend}</span>
            <Star size={20} className='fill-current text-yellow-400' />
          </div>
        </div>
        <div className='flex items-end justify-between'>
          <div className='flex flex-col'>
            {workSchedule.split(', ').map((time, index) => (
              <span key={index} className='text-gray-600 text-sm'>
                {time}
              </span>
            ))}
          </div>
          <span className='font-medium text-sm'>~{rageReceipt} ₽</span>
        </div>
      </CardBody>
    </Card>
  );
};
