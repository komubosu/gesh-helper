import { cn } from '@/shared/lib/cn';
import { SECTORS_DATA } from '@/shared/model/constants';
import { baseApiURL } from '@/shared/model/env';

export default async function Home() {
  let sectors = SECTORS_DATA.sector;

  try {
    if (!baseApiURL) return;
    const response = await fetch(baseApiURL);

    if (!response.ok) {
      throw new Error('Запрос на сектора с ошибкой');
    }

    const data = await response.json();

    sectors = data?.sector ?? SECTORS_DATA.sector;
  } catch (error) {
    console.error(error);
  }

  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div>
        {sectors.map(sector => (
          <div key={sector.id}>
            <h2 className='font-bold text-lg'>{sector.value.name_sector}</h2>
            <ul className='pl-4'>
              {sector.value.lifts.map((lift, index) => (
                <li key={index} className='flex gap-2'>
                  <span>{lift.name}</span>
                  <span className={cn(lift.is_work ? 'text-green-500' : 'text-red-500')}>
                    {lift.is_work ? 'Работает' : 'Не работает'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
