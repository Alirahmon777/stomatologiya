import { calendar, location, logo, whatsapp } from '@/assets';
import { Box, Button, Container, Flex, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import HeaderNav from './HeaderNav';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='py-[31px]'>
      <Container maxW={'1232px'}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Flex gap={'39px'}>
            <Flex gap={'14px'}>
              <Link href={'/'}>
                <Image src={logo} alt='logo' />
              </Link>
              <Flex direction={'column'} fontWeight={'semibold'} width={{ xl: '173px' }} gap={'10px'}>
                <Text>Стоматологический центр</Text>
                <Button className='bg-[#3C9CD6] text-white' _hover={{ background: '#3C9CD6' }}>
                  С Вами с 1989 г.
                </Button>
              </Flex>
            </Flex>
            <Wrap className='flex gap-[60px]'>
              <WrapItem width={{ xl: '230px' }}>
                <Flex alignItems={'flex-start'} gap={'12px'}>
                  <Image src={location} alt='location icon' />
                  <Text>г. Гатчина, ул. Лейтенанта Шмидта, дом 7</Text>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex alignItems={'flex-start'} gap={'12px'}>
                  <Image src={calendar} alt='calendar icon' />
                  <Flex direction={'column'}>
                    <Text>Пн-Пт 9:00-20:00</Text>
                    <Text>Сб 9:00-19:00</Text>
                    <Text>Вс 9:00-18:00</Text>
                  </Flex>
                </Flex>
              </WrapItem>
            </Wrap>
          </Flex>
          <Flex gap={'20px'} direction={'column'}>
            <Flex fontWeight={'semibold'} fontSize={24} width={{ xl: '273px' }} gap={'12px'}>
              <Image src={whatsapp} alt='whatsapp icon' />
              <Flex direction={'column'} alignItems={'flex-end'}>
                <Text>+7 813 712 08 83</Text>
                <Text>+7 906 227 94 59</Text>
              </Flex>
            </Flex>
            <Button className='bg-[#3C9CD6] text-white' _hover={{ background: '#3C9CD6' }}>
              Записаться на прием
            </Button>
          </Flex>
        </Flex>

        <HeaderNav />
      </Container>
    </header>
  );
};

export default Header;
