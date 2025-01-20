import { cn } from '@/shared/lib/cn';

const data = {
  sector: [
    {
      type: 'sector',
      value: {
        name_sector: 'Сектор А',
        lifts: [
          {
            name: 'Кресельная КД «Фристайл»',
            is_work: true,
          },
          {
            name: 'Кресельная КД «Фристайл2»',
            is_work: false,
          },
        ],
      },
      id: '37bdc96c-032b-413e-adb1-f04a78fe13d1',
    },
    {
      type: 'sector',
      value: {
        name_sector: 'Сектор В',
        lifts: [
          {
            name: 'Кресельная КД «Булочка»',
            is_work: false,
          },
        ],
      },
      id: 'be51d88b-fa87-4db5-8fa7-b2176d9dbfb1',
    },
  ],
};

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      {/* <div className='inline-block max-w-xl justify-center text-center'>
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: 'violet' })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>websites regardless of your design experience.</span>
        <div className={subtitle({ class: 'mt-4' })}>Beautiful, fast and modern React UI library.</div>
      </div> */}

      <div>
        {data.sector.map(sector => (
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
