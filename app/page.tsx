'use client';

import { Card, CardBody, CardHeader } from '@heroui/card';
import { CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

import { SECTORS_DATA } from '@/shared/model/constants';
import { baseApiURL } from '@/shared/model/env';

export default function Sectors() {
  const [sectors, setSectors] = useState<typeof SECTORS_DATA.sector>(SECTORS_DATA.sector);

  const getSectors = async () => {
    try {
      const response = await fetch(baseApiURL);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      setSectors(data?.sector);
    } catch (error) {
      console.error(error);
    }
  };

  getSectors();

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
