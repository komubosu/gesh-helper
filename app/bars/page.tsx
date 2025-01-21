import { BARS_DATA } from '@/shared/model/constants';
import { Card, CardBody } from '@heroui/card';
import { Star } from 'lucide-react';

export default function BarsPage() {
  const bars = BARS_DATA;

  return (
    <section className='flex flex-col gap-4'>
      <ul className='space-y-4'>
        {bars.map(bar => (
          <Card key={bar.id}>
            <CardBody className='space-y-2'>
              <div className='flex items-center justify-between'>
                <h2 className='font-bold text-2xl'>{bar.name}</h2>
                <div className='flex h-full items-center gap-1'>
                  <span className='font-medium text-sm'>{bar.rating}</span>
                  <Star size={20} className='fill-current text-yellow-400' />
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-gray-600 text-sm'>
                  {bar.openFrom} - {bar.openTo}
                </span>
                <span className='font-medium text-sm'>Средний чек: {bar.averageCheck} ₽</span>
              </div>
            </CardBody>
          </Card>
        ))}
      </ul>
    </section>
  );
}
