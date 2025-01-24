import { ShadowList } from '@/shared/ui/shadow-list';

export default function PubsPage() {
  return (
    <ShadowList>
      <li className='text-center text-4xl'>Название</li>
      <li className='text-center text-2xl'>О нас</li>
      <li className='text-center text-lg'>Контакты для связи</li>
    </ShadowList>
  );
}
