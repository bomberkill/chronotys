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
} from '@mantine/core';
import Link from 'next/link';
import NextImage from 'next/image';
import { useTranslation } from 'next-i18next';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { theme } from '@/theme';
import '@mantine/carousel/styles.css';
// import chronotys from '../public/images/chronotys image.jpeg';
import classes from './index.module.css';
import delivery from '../public/images/delivery1.jpeg';
import orange from '../public/images/partner1.png';
import mtn from '../public/images/partner2.png';
import yango from '../public/images/partner3.png';
import ecobank from '../public/images/partner4.png';
import chronomap from '../public/images/chronotys-map.jpeg';
// import map from '../public/images/map.jpg';
import Header from '@/components/Header/header';

export default function HomePage() {
  const { t } = useTranslation('home');
  const servicesSlide = [
    {
      image: delivery,
      title: 'B2B Delivery',
      text: 'Join the Mobile generation with an Bee Smartphone loan. Bee offers the latest phone models that fits your budget.',
      button: 'Read More',
    },
    {
      image: delivery,
      title: 'B2B Delivery',
      text: 'Join the Mobile generation with an Bee Smartphone loan. Bee offers the latest phone models that fits your budget.',
      button: 'Read More',
    },
    {
      image: delivery,
      title: 'B2B Delivery',
      text: 'Join the Mobile generation with an Bee Smartphone loan. Bee offers the latest phone models that fits your budget.',
      button: 'Read More',
    },
    {
      image: delivery,
      title: 'B2B Delivery',
      text: 'Join the Mobile generation with an Bee Smartphone loan. Bee offers the latest phone models that fits your budget.',
      button: 'Read More',
    },
    {
      image: delivery,
      title: 'B2B Delivery',
      text: 'Join the Mobile generation with an Bee Smartphone loan. Bee offers the latest phone models that fits your budget.',
      button: 'Read More',
    },
    {
      image: delivery,
      title: 'B2B Delivery',
      text: 'Join the Mobile generation with an Bee Smartphone loan. Bee offers the latest phone models that fits your budget.',
      button: 'Read More',
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
  const ourpartner = [ecobank, mtn, orange, yango, ecobank, mtn];
  // const locations = ['37.7749,-122.4194', '34.0522,-118.2437', '40.7128,-74.0060', '51.5074,-0.1278', '51.5074,-0.1278'];
  const locations = [
    'https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Google, NOBISOFT SARL, 237 Bessengue, Douala, CM&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
    'https://www.google.com/maps?q=34.0522,-118.2437',
    'https://www.google.com/maps?q=40.7128,-74.0060',
    'https://www.google.com/maps?q=51.5074,-0.1278',
    'https://www.google.com/maps?q=51.5074,-0.1278',
  ];
  return (
    <>
      <Header color={false} />
      <Box
        pt="15vh"
        h={{ base: '70vh', sm: '100vh' }}
        maw="100%"
        className={classes.banner}
        pb={theme.spacing?.lg}
      >
        <Container
          h="100%"
          style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}
          size="80%"
        >
          <Box w={{ base: '100%', md: '70%' }}>
            <Stack gap={5}>
              <Title
                c={theme.colors?.orange?.[0]}
                fz={{ base: 'lg', xs: 'xl' }}
                fw={700}
                // mx={{ base: 10, sm: 300 }}
                ta={{ base: 'center', md: 'start' }}
              >
                {t('title1')}
              </Title>
              <Title
                c="white"
                fz={{ base: 'md', xs: 'lg' }}
                fw={400}
                // mx={{ base: 10, sm: 300 }}
                ta={{ base: 'center', md: 'start' }}
              >
                {t('title2')}
              </Title>
              <Title
                c={theme.colors?.orange?.[0]}
                fz={{ base: 'lg', xs: 'xl' }}
                fw={700}
                // mx={{ base: 10, sm: 300 }}
                ta={{ base: 'center', md: 'start' }}
              >
                {t('name')}
              </Title>
              <Title
                c="white"
                fz={{ base: 'md', xs: 'lg' }}
                fw={400}
                // mx={{ base: 10, sm: 300 }}
                ta={{ base: 'center', md: 'start' }}
              >
                {t('title3')}
              </Title>
              <Group mt={theme.spacing?.lg} justify="start" gap={15}>
                <Link legacyBehavior passHref href="/contact-us">
                  <Button w="190px" color={theme.colors?.orange?.[0]} h="50px">
                    {t('partner')}
                  </Button>
                </Link>
                <Link legacyBehavior passHref href="/contact-us">
                  <Button w="190px" color={theme.colors?.orange?.[0]} h="50px">
                    {t('order')}
                  </Button>
                </Link>
              </Group>
            </Stack>
          </Box>
        </Container>
      </Box>
      <Box style={{ overflow: 'hidden' }} py={theme.spacing?.xl} h="auto" w="100%" bg="dark.9">
        <Container h="100%" size="80%">
          <Box>
            <Text c="white.0" fw="bold" fz="lg" ta="center">
              Our Services
            </Text>
            <Text c="white.0" ta="center">
              We will match you with a loan program that meet your financial need. In short term
              liquidity, by striving to make funds available to them within 24 hours of application.
            </Text>
            <Carousel
              mt={theme.spacing?.xl}
              align="start"
              slideSize={{ base: '100%', xs: '50%', lg: '33.33%' }}
              slideGap="md"
              slidesToScroll={1}
              loop
              dragFree
              withControls
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
                      <Text fw="bold">{item.title}</Text>
                      <Text>{item.text}</Text>
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
          <Center></Center>
        </Container>
      </Box>
      <Container py={theme.spacing?.xl} size="90%">
        <Center>
          <Box w={{ base: '100%', md: '90%' }}>
            <Text fw="bold" fz="lg" ta="center">
              Fast & Easy Application Process
            </Text>
            <Text ta="center">
              Suspendisse aliquet varius nunc atcibus lacus sit amet coed portaeri sque mami luctus
              viveed
            </Text>
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
                      pt={theme.spacing?.xl}
                      shadow="sm"
                      p={theme.spacing?.md}
                      h={200}
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
            Our Partner
          </Text>
          <Group pt={theme.spacing?.lg} gap="xl" justify="center" w="100%">
            {ourpartner.map((item, index) => (
              <Box h={150} w={150} key={index}>
                <NextImage style={{ height: 'auto', width: '100%' }} alt="" src={item} />
              </Box>
            ))}
          </Group>
        </Box>
      </Container>
      <Box py={theme.spacing?.xl} bg={theme.colors?.blue?.[1]}>
        <Text fw="bold" fz="lg" c="white.0" ta="center">
          News Rooms
        </Text>
        <Text c="white.0" ta="center">
          Our mission is to deliver reliable, latest news and opinions.
        </Text>
        <Group mt={theme.spacing?.xl} justify="center" gap="xl">
          <Link legacyBehavior passHref href="/contact-us">
            <Button w="190px" color={theme.colors?.orange?.[0]} h="50px">
              {t('partner')}
            </Button>
          </Link>
          <Link legacyBehavior passHref href="/contact-us">
            <Button w="190px" color={theme.colors?.orange?.[0]} h="50px">
              {t('order')}
            </Button>
          </Link>
        </Group>
      </Box>
      <Container style={{ overflow: 'hidden' }} size="80%">
        <Grid w="100%" my={theme.spacing?.xl} justify="center">
          <GridCol span={{ base: 12, sm: 6 }}>
            <NextImage style={{ width: '100%', height: '100%' }} alt="" src={chronomap} />
          </GridCol>
          <GridCol span={{ base: 12, sm: 6 }}>
            <Stack gap="xs">
              {locations.map((item, index) => (
                <iframe
                  loading="lazy"
                  allowFullScreen
                  height="100%"
                  width="100%"
                  style={{ border: 'none', objectFit: 'contain' }}
                  key={index}
                  src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Google, NOBISOFT SARL, 237 Bessengue, Douala, CM&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                />
              ))}
            </Stack>
          </GridCol>
          {/* <Box w="100%" h="100%">
              <NextImage src={map} useMap="#image-map" alt="Segmented Map" />
              <map name="image-map">
                <area
                  target="_blank"
                  alt="Location 1"
                  title="Agence de Maroua"
                  href="https://www.google.com/maps?q=37.7749,-122.4194"
                  coords="0,0,250,250"
                  shape="rect"
                />
                <area
                  target="_blank"
                  alt="Location 2"
                  title="Agence de Garoua"
                  href="https://www.google.com/maps?q=34.0522,-118.2437"
                  coords="250,0,500,250"
                  shape="rect"
                />
                <area
                  target="_blank"
                  alt="Location 3"
                  title="Agence de Ngaoundéré"
                  href="https://www.google.com/maps?q=40.7128,-74.0060"
                  coords="0,250,250,500"
                  shape="rect"
                />
                <area
                  target="_blank"
                  alt="Location 4"
                  title="Agence de Douala"
                  href="https://www.google.com/maps?q=51.5074,-0.1278"
                  coords="250,250,500,500"
                  shape="rect"
                />
              </map>
            </Box> */}
        </Grid>
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
