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
  Center,
  AspectRatio,
  Stack,
  Badge,
  Transition,
} from '@mantine/core';
import Link from 'next/link';
import NextImage from 'next/image';
import { useTranslation } from 'next-i18next';
// import { useState } from 'react';
// import Autoplay from 'embla-carousel-autoplay';
// import { useMediaQuery } from '@mantine/hooks';
import { useInViewport, useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { theme } from '@/theme';
import '@mantine/carousel/styles.css';
import classes from './index.module.css';
import fast from '../public/images/fast.png';
import secure from '../public/images/secure.png';
import tracking from '../public/images/tracking.png';
import delivery from '../public/images/delivery.png';
import packaging from '../public/images/packaging.png';
import order from '../public/images/order.png';
import reliability from '../public/images/reliability.png';
import customer from '../public/images/customer.png';
import ease from '../public/images/ease.png';
// import livraisonImage from '../public/images/livraison.jpeg';

export default function IndividualDelivery() {
  // const autoplay = useRef(Autoplay({ delay: 2000 }));
  // const [isHovered, setIsHovered] = useState(false);
  const isSmallScreen = useMediaQuery('(min-width: 576px)');
  const { t } = useTranslation('individual-delivery');
  // const [mounted, setMounted] = useState(false);
  const { ref: refForElementOne, inViewport: inViewportForElementOne } = useInViewport();
  // const { ref: refForElementTwo } = useInViewport();
  const [inViewportForElementTwo, setInViewportForElementTwo] = useState(false);
  const { ref: refForElementThree, inViewport: inViewportForElementThree } = useInViewport();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMediumScreen = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const element = event.target.closest('.features'); // Remplacez '.my-component' par le sélecteur approprié de votre composant
      if (element) {
        if (scrollDirection === 'down') {
          setInViewportForElementTwo(true);
        }
      } else if (scrollDirection === 'down') {
        setInViewportForElementTwo(true);
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const features = [
    {
      title: t('fast-delivery'),
      text: t('fast-delivery-text'),
      image: fast,
    },
    {
      title: t('secure-handling'),
      text: t('secure-handling-text'),
      image: secure,
    },
    {
      title: t('real-time-tracking'),
      text: t('real-time-tracking-text'),
      image: tracking,
    },
  ];
  const howItWorks = [
    {
      title: t('place-order'),
      text: t('place-order-text'),
      image: order,
    },
    {
      title: t('package-handling'),
      text: t('package-handling-text'),
      image: packaging,
    },
    {
      title: t('delivery'),
      text: t('delivery-text'),
      image: delivery,
    },
  ];
  const Benefits = [
    {
      title: t('convenience'),
      text: t('convenience-text'),
      image: ease,
    },
    {
      title: t('reliability'),
      text: t('reliability-text'),
      image: reliability,
    },
    {
      title: t('customer-support'),
      text: t('customer-support-text'),
      image: customer,
    },
  ];
  return (
    <>
      <Box
        pt="15vh"
        h={{ base: '80vh', sm: '80vh', lg: '100vh' }}
        w="100%"
        className={classes.individualBanner}
      >
        <Container
          style={{
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          h="100%"
          size="80%"
        >
          <Box w={{ base: '100%', md: '90%', lg: '80%' }}>
            <Title c={theme.colors?.orange?.[0]} fz="xl" fw="bold" ta="center">
              {t('title')}
            </Title>
            <Title c="white" fz="lg" ta="center">
              {t('subtitle')}
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
        </Container>
      </Box>
      <Container py="xl" size="90%">
        <Center>
          <Box className="features" w="100%">
            <Text fw="bold" fz="lg" ta="center">
              {t('key-features')}
            </Text>
            {features.map((item, index) => {
              const isTextFirst = index % 2 === 0;
              return (
                <Grid my="xs" justify="center" align="center">
                  {!isTextFirst || !isMediumScreen ? (
                    <>
                      <GridCol
                        style={{
                          display: 'flex',
                          justifyContent: isMediumScreen ? 'flex-end' : 'center',
                        }}
                        span={{ base: 12, md: 6 }}
                      >
                        <Transition
                          mounted={inViewportForElementTwo}
                          keepMounted
                          transition="slide-right"
                          duration={1000}
                          timingFunction="ease"
                        >
                          {(styles) => (
                            <AspectRatio
                              display="block"
                              style={styles}
                              w={isSmallScreen ? 300 : 200}
                              h={isSmallScreen ? 300 : 200}
                            >
                              <NextImage
                                style={{ width: '100%', height: '100%' }}
                                src={item.image}
                                alt=""
                              />
                            </AspectRatio>
                          )}
                        </Transition>
                      </GridCol>
                      <GridCol key={index} span={{ base: 12, md: 6 }}>
                        <Box>
                          <Text
                            mb={theme.spacing?.sm}
                            fw="bold"
                            ta={{ base: 'center', md: 'start' }}
                          >
                            {item.title}
                          </Text>
                          <Text ta={{ base: 'center', md: 'start' }}>{item.text}</Text>
                        </Box>
                      </GridCol>
                    </>
                  ) : (
                    <>
                      <GridCol key={index} span={{ base: 12, md: 7 }}>
                        <Box>
                          <Text mb={theme.spacing?.sm} fw="bold" ta={{ base: 'center', md: 'end' }}>
                            {item.title}
                          </Text>
                          <Text ta={{ base: 'center', md: 'end' }}>{item.text}</Text>
                        </Box>
                      </GridCol>
                      <GridCol
                        span={{ base: 12, md: 5 }}
                        style={{
                          display: 'flex',
                          justifyContent: isMediumScreen ? 'flex-start' : 'center',
                        }}
                      >
                        <Transition
                          mounted={false}
                          keepMounted
                          transition="slide-left"
                          duration={1000}
                          timingFunction="ease"
                        >
                          {(styles) => (
                            <AspectRatio display="block" style={styles} w={300} h={300}>
                              <NextImage
                                style={{ width: '100%', height: '100%' }}
                                src={item.image}
                                alt=""
                              />
                            </AspectRatio>
                          )}
                        </Transition>
                      </GridCol>
                    </>
                  )}
                </Grid>
              );
            })}
          </Box>
        </Center>
        <Center pt={theme.spacing?.lg}>
          <Box>
            <Text mb={theme.spacing?.lg} fw="bold" fz="lg" ta="center">
              {t('how-it-works')}
            </Text>
            <Grid ref={refForElementOne} align="center" justify="center">
              {howItWorks.map((item, index) => (
                <GridCol my={theme.spacing?.md} key={index} span={{ base: 12, md: 4 }}>
                  <Center>
                    <Box>
                      <Stack align="center" justify="center">
                        <Transition
                          mounted={inViewportForElementOne}
                          transition={
                            index === 0 ? 'slide-right' : index === 1 ? 'slide-down' : 'slide-left'
                          }
                          duration={1500}
                          timingFunction="ease"
                          keepMounted
                        >
                          {(styles) => (
                            <Box style={styles} pos="relative">
                              <Badge
                                color={theme.colors?.blue?.[0]}
                                h={50}
                                w={50}
                                mt={-25}
                                pos="absolute"
                                variant="outline"
                                // bg="white.0"
                                fw="bold"
                                fz="md"
                                left={10}
                                top={10}
                                circle
                                // className={classes.badge}
                              >
                                {index + 1}
                              </Badge>
                              <AspectRatio
                                style={{
                                  border: 'black',
                                  backgroundColor: 'Background',
                                  borderWidth: 5,
                                  borderRadius: isSmallScreen ? 200 : 150,
                                }}
                                w={isSmallScreen ? 250 : 200}
                                h={isSmallScreen ? 250 : 200}
                              >
                                <NextImage
                                  alt=""
                                  src={item.image}
                                  style={{ width: '100%', height: '100%' }}
                                />
                              </AspectRatio>
                            </Box>
                          )}
                        </Transition>
                        <Box w={isSmallScreen ? '100%' : '90%'}>
                          <Text mb={theme.spacing?.sm} fw="bold" ta="center">
                            {item.title}
                          </Text>
                          <Text ta="center">{item.text}</Text>
                        </Box>
                      </Stack>
                    </Box>
                  </Center>
                </GridCol>
              ))}
            </Grid>
          </Box>
        </Center>
      </Container>
      <Box bg={theme.colors?.blue?.[1]} py="xl">
        <Text mb={theme.spacing?.lg} c="white.0" fw="bold" fz="lg" ta="center">
          {t('benefits')}
        </Text>
        <Container size="80%">
          <Grid ref={refForElementThree} justify="center" align="center">
            {Benefits.map((item, index) => (
              <GridCol key={index} span={{ base: 12, md: 4 }}>
                <Transition
                  mounted={inViewportForElementThree}
                  transition={index % 2 ? 'slide-up' : 'slide-down'}
                  duration={1500}
                  timingFunction="ease"
                  keepMounted
                  onExited={() => !inViewportForElementThree}
                >
                  {(styles) => (
                    <Center display="block" style={styles}>
                      <Paper
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        w={{ xs: '100%', sm: '90%', md: '100%', lg: '90%' }}
                        radius="lg"
                        shadow="lg"
                        p={theme.spacing?.lg}
                      >
                        <AspectRatio
                          style={{
                            border: 'black',
                            backgroundColor: 'Background',
                            borderWidth: 5,
                            borderRadius: isSmallScreen ? 200 : 150,
                          }}
                          w={isSmallScreen ? 250 : 200}
                          h={isSmallScreen ? 250 : 200}
                        >
                          <NextImage
                            style={{ width: '100%', height: '100%' }}
                            src={item.image}
                            alt=""
                          />
                        </AspectRatio>
                        <Stack>
                          <Text mt={theme.spacing?.md} fw="bold" ta="center">
                            {item.title}
                          </Text>
                          <Text ta="center">{item.text}</Text>
                        </Stack>
                      </Paper>
                    </Center>
                  )}
                </Transition>
              </GridCol>
            ))}
          </Grid>
        </Container>
      </Box>
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
    </>
  );
}

export async function getStaticProps({ locale = 'fr' }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'individual-delivery'])),
    },
  };
}
