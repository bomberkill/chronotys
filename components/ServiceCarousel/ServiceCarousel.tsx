import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Box, Button, Container, Paper, Stack, Text, rem } from '@mantine/core';
import Link from 'next/link';
import NextImage from 'next/image';
import { useTranslation } from 'next-i18next';
import { useMediaQuery } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { theme } from '@/theme';
import stockage from '../../public/images/stockage.jpeg';
import particulier from '../../public/images/particulier.jpg';
import marchandise from '../../public/images/marchandise.png';

export default function ServiceCarousel() {
  const { t } = useTranslation('common');
  const isLargeScreen = useMediaQuery('(min-width: 790px)');
  const autoplay2 = useRef(Autoplay({ delay: 2000 }));
  const servicesSlide = [
    {
      image: particulier,
      title: t('service.title.title1'),
      text: t('service.text.text1'),
      link: '/individual-delivery',
    },
    {
      image: marchandise,
      title: t('service.title.title2'),
      text: t('service.text.text2'),
      link: '/merchant-delivery',
    },
    {
      image: stockage,
      title: t('service.title.title3'),
      text: t('service.text.text3'),
      link: '/goods-storage',
    },
    {
      image: particulier,
      title: t('service.title.title1'),
      text: t('service.text.text1'),
      link: '/individual-delivery',
    },
    {
      image: marchandise,
      title: t('service.title.title2'),
      text: t('service.text.text2'),
      link: '/merchant-delivery',
    },
    {
      image: stockage,
      title: t('service.title.title3'),
      text: t('service.text.text3'),
      link: '/goods-storage',
    },
  ];

  return (
    <Box style={{ overflow: 'hidden' }} py={theme.spacing?.xl} h="auto" w="100%" bg="dark.9">
      <Container h="100%" size={isLargeScreen ? '80%' : '90%'}>
        <Box>
          <Text c="white.0" fw="bold" fz="lg" ta="center">
            {t('service.header')}
          </Text>
          <Text c="white.0" ta="center">
            {t('service.desc')}
          </Text>
          <Carousel
            px={isLargeScreen ? rem(60) : rem(20)}
            mt={theme.spacing?.xl}
            align="start"
            slideSize={{ base: '100%', xs: '50%', lg: '33.33%' }}
            slideGap="lg"
            slidesToScroll={1}
            loop
            dragFree
            withControls={!!isLargeScreen}
            controlSize={40}
            controlsOffset={-rem(150)}
            plugins={[autoplay2.current]}
            onMouseEnter={autoplay2.current.stop}
            onMouseLeave={autoplay2.current.reset}
          >
            {servicesSlide.map((item, index) => (
              <CarouselSlide h="100%" w="100%" key={index}>
                <Paper shadow="sm" p={theme.spacing?.lg} h="100%">
                  <NextImage
                    style={{ width: '100%', height: '100%', borderRadius: 5 }}
                    alt="image"
                    src={item.image}
                  />
                  <Stack gap={10}>
                    <Box h={135}>
                      <Text lineClamp={2} ta="center" fw="bold">
                        {item.title}
                      </Text>
                      <Text pt={theme.spacing?.sm} lineClamp={3} ta="center">
                        {item.text}
                      </Text>
                    </Box>
                    <Link legacyBehavior passHref href={item.link}>
                      <Button color={theme.colors?.orange?.[0]} h="50px">
                        {t('service.button')}
                      </Button>
                    </Link>
                  </Stack>
                </Paper>
              </CarouselSlide>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}
