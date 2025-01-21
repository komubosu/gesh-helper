import { Spinner } from '@heroui/spinner';

export default function Loader() {
  return (
    <div className='flex h-full items-center justify-center'>
      <Spinner classNames={{ wrapper: 'w-20 h-20', circle1: 'border-5', circle2: 'border-5' }} />
    </div>
  );
}
