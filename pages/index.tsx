/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable max-len */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPropsContext } from 'next';
import {
  Box,
  Button,
  Title,
  Text,
  Group,
  Container,
  Paper,
  Grid,
  GridCol,
  Badge,
  Center,
  AspectRatio,
  Transition,
} from '@mantine/core';
import Link from 'next/link';
import NextImage from 'next/image';
import { useTranslation } from 'next-i18next';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { useEffect, useRef, useState } from 'react';
import { useIntersection, useMediaQuery } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import { theme } from '@/theme';
import '@mantine/carousel/styles.css';
import classes from './index.module.css';
import Header from '@/components/Header/Header';
import women from '../public/images/women12.png';
import santalucia from '../public/images/santalucia.png';
import projectioncompany from '../public/images/projectioncompany.png';
import bao from '../public/images/bao.png';
import nobisoft from '../public/images/nobisoft.png';
import ServiceCarousel from '@/components/ServiceCarousel/ServiceCarousel';
import MapLocation from '@/components/MapLocation/MapLocation';
import ContactSection from '@/components/ContactSection/ContactSection';
// import navigation from '../public/images/navigation.png';

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const isSmallScreen = useMediaQuery('(min-width: 576px)');
  // const containerRef = useRef<HTMLDivElement>(null);
  const { ref: boxRef, entry: boxEntry } = useIntersection({
    root: null,
    threshold: 0.6,
  });
  const { ref: transitionRef, entry: transitionEntry } = useIntersection({
    root: null,
    threshold: isSmallScreen ? 0.15 : 0.3,
  });
  const [refProcessMounted, setRefProcessMounted] = useState(false);
  const { t } = useTranslation('home');
  const processStep = [
    {
      title: t('process.title1'),
      text: t('process.description1'),
    },
    {
      title: t('process.title2'),
      text: t('process.description2'),
    },
    {
      title: t('process.title3'),
      text: t('process.description3'),
    },
    {
      title: t('process.title4'),
      text: t('process.description4'),
    },
    {
      title: t('process.title5'),
      text: t('process.description5'),
    },
    {
      title: t('process.title6'),
      text: t('process.description6'),
    },
  ];
  const ourpartner = [
    santalucia,
    nobisoft,
    projectioncompany,
    bao,
    santalucia,
    nobisoft,
    projectioncompany,
    bao,
  ];
  useEffect(() => {
    if (boxEntry?.isIntersecting) {
      setRefProcessMounted(false);
    }
    if (transitionEntry?.isIntersecting) {
      setRefProcessMounted(true);
    }
  }, [boxEntry, transitionEntry]);
  return (
    <Box>
      <Header color={false} />
      <Box
        pt="15vh"
        h={{ base: '80vh', sm: '80vh', lg: '100vh' }}
        w="100%"
        className={classes.banner}
        pb={theme.spacing?.lg}
        ref={boxRef}
        // onMouseEnter={() => setRefProcessMounted(false)}
      >
        <Container
          h="100%"
          style={{
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          size="80%"
        >
          <Grid justify="center" align="center">
            <GridCol span={{ base: 12, md: 7, lg: 6 }}>
              <Box w="100%">
                <Title
                  c={theme.colors?.orange?.[0]}
                  fz={{ base: 'lg', xs: 'xl' }}
                  fw="bold"
                  ta={{ base: 'center' }}
                >
                  {t('title1')}
                </Title>
                <Title c="white" fz={{ base: 'md', xs: 'lg' }} ta={{ base: 'center' }}>
                  {t('title2')}
                </Title>
                <Title
                  c={theme.colors?.orange?.[0]}
                  fz={{ base: 'lg', xs: 'xl' }}
                  fw="bold"
                  ta={{ base: 'center' }}
                >
                  {t('name')}
                </Title>
                <Title c="white" fz={{ base: 'md', xs: 'lg' }} ta={{ base: 'center' }}>
                  {t('title3')}
                </Title>
                <Group mt={theme.spacing?.lg} justify="center" gap={15}>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://forms.gle/jtdiiWxLVg5RuuKy9"
                  >
                    <Button w="190px" color={theme.colors?.orange?.[0]} h="50px">
                      {t('partner')}
                    </Button>
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://forms.gle/Gkc8fE7RemBqVfdA7"
                  >
                    <Button w="190px" color={theme.colors?.orange?.[0]} h="50px">
                      {t('order')}
                    </Button>
                  </Link>
                </Group>
              </Box>
            </GridCol>
            <GridCol span={{ base: 0, md: 5, lg: 6 }}>
              <AspectRatio display={{ base: 'none', md: 'block' }}>
                <NextImage
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  alt=""
                  src={women}
                />
              </AspectRatio>
            </GridCol>
          </Grid>
        </Container>
      </Box>
      <ServiceCarousel />
      <Container ref={transitionRef} py={theme.spacing?.xl} size="90%">
        <Center>
          <Box w={{ base: '100%', md: '90%' }}>
            <Text fw="bold" fz="lg" ta="center">
              {t('process.header')}
            </Text>
            <Text ta="center">{t('process.desc')}</Text>
            <Grid w="100%" gutter="lg" my={theme.spacing?.xl} justify="center" align="center">
              {processStep.map((item, index) => (
                <GridCol
                  mih={260}
                  pb={theme.spacing?.xl}
                  key={index}
                  span={{ base: 12, xs: 6, md: 4 }}
                >
                  <Transition
                    mounted={refProcessMounted}
                    keepMounted
                    duration={1000}
                    transition={index < 4 ? 'slide-left' : 'slide-right'}
                  >
                    {(styles) => (
                      <Box style={styles}>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                          <Badge
                            color={theme.colors?.orange?.[0]}
                            h={50}
                            w={50}
                            mt={-25}
                            pos="absolute"
                            variant="outline"
                            // bg="white.0"
                            fw="bold"
                            fz="md"
                            circle
                            className={classes.badge}
                          >
                            {index + 1}
                          </Badge>
                        </Box>
                        <Center>
                          <Paper
                            className={classes.paper}
                            withBorder
                            pt={theme.spacing?.lg}
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                            shadow="sm"
                            p={theme.spacing?.md}
                            h={200}
                            w={261}
                          >
                            <Box w="100%">
                              <Text fz="md" fw="bold" pb={theme.spacing?.md} ta="center">
                                {item.title}
                              </Text>
                              <Text fz="sm" ta="center">
                                {item.text}
                              </Text>
                            </Box>
                          </Paper>
                        </Center>
                      </Box>
                    )}
                  </Transition>
                </GridCol>
              ))}
            </Grid>
          </Box>
        </Center>
        <Box pt={theme.spacing?.xl} w="100%">
          <Text fw="bold" fz="lg" ta="center">
            {t('ourpartner')}
          </Text>
          <Container size="80%">
            <Carousel
              mt={theme.spacing?.xl}
              align="start"
              slideSize={{ base: '100%', xs: '50%', md: '33.33%', lg: '25%' }}
              slideGap="md"
              slidesToScroll={1}
              loop
              withControls={false}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
            >
              {ourpartner.map((item, index) => (
                <CarouselSlide key={index}>
                  <Center>
                    <AspectRatio ratio={16 / 9}>
                      <NextImage
                        style={{ height: 'auto', width: '100%', objectFit: 'contain' }}
                        alt=""
                        src={item}
                      />
                    </AspectRatio>
                  </Center>
                </CarouselSlide>
              ))}
            </Carousel>
          </Container>
        </Box>
      </Container>
      <ContactSection />
      <MapLocation />
    </Box>
  );
}
export async function getStaticProps({ locale = 'fr' }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}
