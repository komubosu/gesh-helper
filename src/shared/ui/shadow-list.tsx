import { ScrollShadow } from '@heroui/scroll-shadow';

export const ShadowList = ({ children }: React.PropsWithChildren) => {
  return (
    <ScrollShadow className='h-full px-4'>
      <ul className='space-y-4'>{children}</ul>
    </ScrollShadow>
  );
};
