import { Card, CardBody, CardHeader } from '@heroui/card';
import { CheckCircle2Icon, XCircleIcon } from 'lucide-react';

export const SectionCard = ({
  name,
  lifts,
}: {
  name: string;
  lifts: { name: string; is_work: boolean }[];
}) => {
  return (
    <Card radius='lg'>
      <CardHeader>
        <h2 className='font-bold text-2xl'>{name}</h2>
      </CardHeader>
      <CardBody>
        <ul className='space-y-2'>
          {lifts.map((lift, index) => (
            <li className='flex items-center justify-between' key={index}>
              <span>{lift.name}</span>
              {lift.is_work ? (
                <CheckCircle2Icon className='text-green-500' />
              ) : (
                <XCircleIcon className='text-red-500' />
              )}
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};
