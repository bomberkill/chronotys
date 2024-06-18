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
  Stack,
  Paper,
  Grid,
  GridCol,
  Badge,
  Center,
  AspectRatio,
  rem,
} from '@mantine/core';
import Link from 'next/link';
import NextImage from 'next/image';
import { useTranslation } from 'next-i18next';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '@/theme';
import '@mantine/carousel/styles.css';
import classes from './index.module.css';
import chronomap from '../public/images/chronotys-map.png';
import Header from '@/components/Header/header';
import women from '../public/images/women1.png';
import douala from '../public/images/douala.png';
import douala2 from '../public/images/douala2.png';
import yaounde from '../public/images/yaounde.png';
import yaounde2 from '../public/images/yaounde2.png';
import ngaoundere from '../public/images/ngaoundere.png';
import ngaoundere2 from '../public/images/ngaoundere2.png';
import garoua from '../public/images/garoua.png';
import garoua2 from '../public/images/garoua2.png';
import maroua from '../public/images/maroua.png';
import maroua2 from '../public/images/maroua2.png';
import stockage from '../public/images/stockage.jpeg';
import santalucia from '../public/images/santalucia.png';
import projectioncompany from '../public/images/projectioncompany.png';
import bao from '../public/images/bao.png';
import nobisoft from '../public/images/nobisoft.png';
import particulier from '../public/images/particulier.jpg';
import marchandise from '../public/images/marchandise.png';
import navigation from '../public/images/navigation.png';

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const autoplay2 = useRef(Autoplay({ delay: 2000 }));
  const [dlaHovered, setDlaHovered] = useState(false);
  const [ydeHovered, setYdeHovered] = useState(false);
  const [marHovered, setMarHovered] = useState(false);
  const [garHovered, setGarHovered] = useState(false);
  const [ngaHovered, setNgaHovered] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width: 790px)');
  const { t } = useTranslation('home');
  const servicesSlide = [
    {
      image: particulier,
      title: t('service.title.title1'),
      text: t('service.text.text1'),
      button: t('service.button'),
    },
    {
      image: marchandise,
      title: t('service.title.title2'),
      text: t('service.text.text2'),
      button: t('service.button'),
    },
    {
      image: stockage,
      title: t('service.title.title3'),
      text: t('service.text.text3'),
      button: t('service.button'),
    },
    {
      image: particulier,
      title: t('service.title.title1'),
      text: t('service.text.text1'),
      button: t('service.button'),
    },
    {
      image: marchandise,
      title: t('service.title.title2'),
      text: t('service.text.text2'),
      button: t('service.button'),
    },
    {
      image: stockage,
      title: t('service.title.title3'),
      text: t('service.text.text3'),
      button: t('service.button'),
    },
  ];
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
  const locations = [
    { name: 'Douala', href: 'https://www.google.com/maps?q=51.5074,-0.1278' },
    { name: 'Yaoundé', href: 'https://www.google.com/maps?q=40.7128,-74.0060' },
    { name: 'Maroua', href: 'https://www.google.com/maps?q=34.0522,-118.2437' },
    { name: 'Garoua', href: 'https://www.google.com/maps?q=51.5074,-0.1278' },
    {
      name: 'Ngaoundéré',
      href: 'https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Google, NOBISOFT SARL, 237 Bessengue, Douala, CM&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
    },
  ];
  return (
    <>
      <Header color={false} />
      <Box
        pt="15vh"
        h={{ base: '80vh', sm: '80vh', lg: '100vh' }}
        w="100%"
        className={classes.banner}
        pb={theme.spacing?.lg}
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
                  fw={700}
                  // mx={{ base: 10, sm: 300 }}
                  ta={{ base: 'center' }}
                >
                  {t('title1')}
                </Title>
                <Title
                  c="white"
                  fz={{ base: 'md', xs: 'lg' }}
                  fw={400}
                  // mx={{ base: 10, sm: 300 }}
                  ta={{ base: 'center' }}
                >
                  {t('title2')}
                </Title>
                <Title
                  c={theme.colors?.orange?.[0]}
                  fz={{ base: 'lg', xs: 'xl' }}
                  fw={700}
                  // mx={{ base: 10, sm: 300 }}
                  ta={{ base: 'center' }}
                >
                  {t('name')}
                </Title>
                <Title
                  c="white"
                  fz={{ base: 'md', xs: 'lg' }}
                  fw={400}
                  // mx={{ base: 10, sm: 300 }}
                  ta={{ base: 'center' }}
                >
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
              slideGap="md"
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
                <CarouselSlide h="auto" w="100%" key={index}>
                  <Paper shadow="sm" p={theme.spacing?.lg} h="auto">
                    <NextImage
                      style={{ width: '100%', height: '100%', borderRadius: 5 }}
                      alt="image"
                      src={item.image}
                    />
                    <Stack>
                      <Text ta="center" fw="bold">
                        {item.title}
                      </Text>
                      <Text ta="center">{item.text}</Text>
                      <Link legacyBehavior passHref href="/contact-us">
                        <Button color={theme.colors?.orange?.[0]} h="50px">
                          {item.button}
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
      <Container py={theme.spacing?.xl} size="90%">
        <Center>
          <Box w={{ base: '100%', md: '90%' }}>
            <Text fw="bold" fz="lg" ta="center">
              {t('process.header')}
            </Text>
            <Text ta="center">{t('process.desc')}</Text>
            <Grid w="100%" gutter="lg" my={theme.spacing?.xl} justify="center" align="center">
              {processStep.map((item, index) => (
                <GridCol pb={theme.spacing?.xl} key={index} span={{ base: 12, xs: 6, md: 4 }}>
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
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
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
                    {/* <Box h={150} w={150} key={index}>
                  </Box> */}
                  </Center>
                </CarouselSlide>
              ))}
            </Carousel>
          </Container>
          {/* <Group pt={theme.spacing?.lg} gap="xl" justify="center" w="100%">
          </Group> */}
        </Box>
      </Container>
      <Box py={theme.spacing?.xl} bg={theme.colors?.blue?.[1]}>
        <Text fw="bold" fz="lg" c="white.0" ta="center">
          {t('contact')}
        </Text>
        <Text c="white.0" ta="center">
          {t('contact-text')}
        </Text>
        <Group mt={theme.spacing?.xl} justify="center" gap="xl">
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
      <Container style={{ overflow: 'hidden' }} size="80%">
        <Center>
          {isLargeScreen ? (
            <Box pos="relative">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps?q=51.5074,-0.1278"
              >
                <AspectRatio
                  onMouseEnter={() => setDlaHovered(true)}
                  onMouseLeave={() => setDlaHovered(false)}
                  style={{
                    zIndex: 10,
                    position: 'absolute',
                    bottom: '83px',
                    left: '-15px',
                    borderRadius: 150,
                  }}
                  maw={200}
                  mah={200}
                >
                  <NextImage
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                    alt=""
                    src={dlaHovered ? douala2 : douala}
                  />
                </AspectRatio>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps?q=40.7128,-74.0060"
              >
                <AspectRatio
                  onMouseEnter={() => setYdeHovered(true)}
                  onMouseLeave={() => setYdeHovered(false)}
                  style={{
                    zIndex: 12,
                    position: 'absolute',
                    bottom: '90px',
                    left: '36px',
                    borderRadius: 500,
                  }}
                  maw={245}
                  mah={245}
                >
                  <NextImage
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                    alt=""
                    src={ydeHovered ? yaounde2 : yaounde}
                  />
                </AspectRatio>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps?q=34.0522,-118.2437"
              >
                <AspectRatio
                  onMouseEnter={() => setMarHovered(true)}
                  onMouseLeave={() => setMarHovered(false)}
                  style={{
                    zIndex: 10,
                    position: 'absolute',
                    top: '-9px',
                    right: '209px',
                    borderRadius: 500,
                  }}
                  maw={200}
                  mah={200}
                >
                  <NextImage
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                    alt=""
                    src={marHovered ? maroua2 : maroua}
                  />
                </AspectRatio>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps?q=51.5074,-0.1278"
              >
                <AspectRatio
                  onMouseEnter={() => setGarHovered(true)}
                  onMouseLeave={() => setGarHovered(false)}
                  style={{
                    zIndex: 11,
                    position: 'absolute',
                    top: '90px',
                    right: '210px',
                    borderRadius: 500,
                  }}
                  maw={250}
                  mah={250}
                >
                  <NextImage
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                    alt=""
                    src={garHovered ? garoua2 : garoua}
                  />
                </AspectRatio>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Google, NOBISOFT SARL, 237 Bessengue, Douala, CM&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <AspectRatio
                  onMouseEnter={() => setNgaHovered(true)}
                  onMouseLeave={() => setNgaHovered(false)}
                  style={{
                    zIndex: 11,
                    position: 'absolute',
                    top: '134px',
                    right: '233px',
                    borderRadius: 500,
                  }}
                  maw={290}
                  mah={290}
                >
                  <NextImage
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                    alt=""
                    src={ngaHovered ? ngaoundere2 : ngaoundere}
                  />
                </AspectRatio>
              </Link>
              <AspectRatio maw={600} mah={600}>
                <NextImage
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  alt=""
                  src={chronomap}
                />
              </AspectRatio>
            </Box>
          ) : (
            <Box py={theme.spacing?.lg}>
              <Center>
                <Group pos="relative">
                  {locations.map((item, index) => (
                    <Link
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.href}
                      key={index}
                    >
                      <Box
                        w={70}
                        h={70}
                        style={{ borderRadius: 35, position: 'absolute', borderWidth: 0.25 }}
                      >
                        <AspectRatio>
                          <NextImage src={navigation} alt="" />
                        </AspectRatio>
                      </Box>
                      <Paper shadow="sm" p={theme.spacing?.sm} radius="sm">
                        <Text fw="bold" ta="center" c={theme.colors?.blue?.[0]}>
                          {item.name}
                        </Text>
                      </Paper>
                    </Link>
                  ))}
                </Group>
              </Center>
            </Box>
          )}
        </Center>
      </Container>
    </>
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
