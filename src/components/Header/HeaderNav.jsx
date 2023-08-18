import { Wrap, WrapItem } from '@chakra-ui/react';
import Link  from 'next/link';
import React from 'react';

const HeaderNav = () => {
  return (
    <nav className='bg-[#F2F3F5] px-[71px] py-[31px] rounded-[15px] text-[#2C2D33] mt-5'>
      <Wrap spacing={'65px'}>
        {NAV_ITEMS?.map(({ label, href }) => (
          <WrapItem fontWeight={'medium'} fontSize={16} flexGrow={1}>
            <Link href={href}>{label}</Link>
          </WrapItem>
        ))}
      </Wrap>
    </nav>
  );
};

export default HeaderNav;

const NAV_ITEMS = [
  {
    label: 'Услуги',
    href: '/uslugi',
  },
  {
    label: 'Цены',
    href: '/tseni',
  },
  {
    label: 'Наши специалисты',
    href: '/spetsialisti',
  },
  {
    label: 'Акции',
    href: '/aktsii',
  },
  {
    label: 'Отзывы',
    href: '/otzivi',
  },
  {
    label: 'Контакты',
    href: '/kontakti',
  },
  {
    label: 'О клинике',
    href: '/o-klinike',
  },
];
