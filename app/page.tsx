import { SECTORS_DATA } from '@/shared/model/constants';
import { baseApiURL } from '@/shared/model/env';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { CheckCircle, XCircle } from 'lucide-react';

export const revalidate = 60;
export const dynamicParams = true;

export default async function Sectors() {
  const response = await fetch(baseApiURL);
  const data = await response.json();

  const sectors = (data?.sector as typeof SECTORS_DATA.sector) || SECTORS_DATA.sector;

  return (
    <section className='flex flex-col gap-4'>
      {sectors.map(sector => (
        <Card key={sector.id}>
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
      ))}
    </section>
  );
}
