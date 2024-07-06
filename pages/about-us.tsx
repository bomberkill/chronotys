/* eslint-disable max-len */
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
  AspectRatio,
  Box,
  Center,
  Container,
  Grid,
  GridCol,
  Paper,
  Stack,
  Text,
  Timeline,
  TimelineItem,
  Transition,
} from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import NextImage from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery, useIntersection } from '@mantine/hooks';
import ServiceCarousel from '@/components/ServiceCarousel/ServiceCarousel';
import MapLocation from '@/components/MapLocation/MapLocation';
import ContactSection from '@/components/ContactSection/ContactSection';
import { theme } from '@/theme';
import santalucia from '../public/images/santalucia.png';
import projectioncompany from '../public/images/projectioncompany.png';
import bao from '../public/images/bao.png';
import nobisoft from '../public/images/nobisoft.png';
import mission from '../public/images/mission.png';
import vision from '../public/images/vision.png';
import integrity from '../public/images/integrity.png';
import quality from '../public/images/quality.png';
import customerfocus from '../public/images/customer-focus.png';
import innovation from '../public/images/innovation.png';
import Header from '@/components/Header/Header';
import team from '../public/images/team.png';
import classes from './index.module.css';
import user1 from '../public/images/user1.png';
import user2 from '../public/images/user2.png';
import user3 from '../public/images/user3.png';

export default function AboutUS() {
  const { t } = useTranslation('about-us');
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const isSmallScreen = useMediaQuery('(min-width: 576px)');
  const isMediumScreen = useMediaQuery('(min-width: 992px)');
  const { ref: transitionOne, entry: transitionOneEntry } = useIntersection({
    root: null,
    threshold: 0.6,
  });
  const { ref: transitionTwo, entry: transitionTwoEntry } = useIntersection({
    root: null,
    threshold: isSmallScreen ? 0.15 : 0.3,
  });
  const { ref: transitionThree, entry: transitionThreeEntry } = useIntersection({
    root: null,
    threshold: isSmallScreen ? 0.15 : 0.4,
  });
  const { ref: transitionFour, entry: transitionFourEntry } = useIntersection({
    root: null,
    threshold: isSmallScreen ? 0.15 : 0.5,
  });
  const [inViewportForElementOne, setInViewportForElementOne] = useState(false);
  const [inViewportForElementTwo, setInViewportForElementTwo] = useState(false);
  const [inViewportForElementThree, setInViewportForElementThree] = useState(false);
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
  const timeline = [
    {
      title: t('timeline.milestone'),
      text: t('timeline.description'),
      year: t('timeline.year'),
    },
    {
      title: t('timeline.milestone2'),
      text: t('timeline.description2'),
      year: t('timeline.year2'),
    },
    {
      title: t('timeline.milestone3'),
      text: t('timeline.description3'),
      year: t('timeline.year3'),
    },
    {
      title: t('timeline.milestone4'),
      text: t('timeline.description4'),
      year: t('timeline.year4'),
    },
    {
      title: t('timeline.milestone5'),
      text: t('timeline.description5'),
      year: t('timeline.year5'),
    },
  ];
  const aboutUs = [
    {
      title: t('mission-title'),
      text: t('mission'),
      image: mission,
    },
    {
      title: t('vision-title'),
      text: t('vision'),
      image: vision,
    },
  ];
  const values = [
    {
      title: t('values.integrity'),
      desc: t('values.integrity-description'),
      image: integrity,
    },
    {
      title: t('values.innovation'),
      desc: t('values.innovation-description'),
      image: innovation,
    },
    {
      title: t('values.customer-focus'),
      desc: t('values.customer-focus-description'),
      image: customerfocus,
    },
    {
      title: t('values.reliability'),
      desc: t('values.reliability-description'),
      image: quality,
    },
  ];
  const teams = [
    {
      title: t('team3-name'),
      text: t('team3-text'),
      role: t('team3-role'),
      image: user3,
    },
    {
      title: t('team1-name'),
      text: t('team1-text'),
      role: t('team1-role'),
      image: user1,
    },
    {
      title: t('team2-name'),
      text: t('team2-text'),
      role: t('team2-role'),
      image: user2,
    },
  ];
  useEffect(() => {
    if (transitionOneEntry?.isIntersecting) {
      setInViewportForElementOne(false);
      setInViewportForElementTwo(false);
    }
    if (transitionTwoEntry?.isIntersecting) {
      setInViewportForElementThree(false);
      setInViewportForElementOne(true);
    }
    if (transitionThreeEntry?.isIntersecting) {
      setInViewportForElementTwo(true);
    }
    if (transitionFourEntry?.isIntersecting) {
      setInViewportForElementThree(true);
    }
  }, [transitionFourEntry, transitionTwoEntry, transitionOneEntry]);
  return (
    <>
      <Header color />
      <Box pt="15vh">
        <Container size="80%">
          <Center ref={transitionOne}>
            <Grid align="center">
              <GridCol span={{ base: 12, sm: 6 }}>
                <AspectRatio>
                  <NextImage style={{ width: '100%', height: '100%' }} alt="" src={team} />
                </AspectRatio>
              </GridCol>
              <GridCol span={{ base: 12, sm: 6 }}>
                <Box>
                  <Timeline>
                    {timeline.map((item, index) => (
                      <TimelineItem key={index}>
                        <Paper p={theme.spacing?.sm} radius="sm" shadow="md">
                          <Text c={theme.colors?.blue?.[0]}>{item.title}</Text>
                          <Text mt={theme.spacing?.xs} c="dimmed" size="sm">
                            {item.text}
                          </Text>
                          <Text size="xs" mt={theme.spacing?.sm}>
                            {item.year}
                          </Text>
                        </Paper>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Box>
              </GridCol>
            </Grid>
          </Center>
        </Container>
        <Container py={theme.spacing?.xl}>
          <Center ref={transitionTwo}>
            <Box w="100%">
              <Text fw="bold" fz="lg" ta="center">
                {t('key-features')}
              </Text>
              {aboutUs.map((item, index) => {
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
                          mih={isSmallScreen ? 300 : 200}
                        >
                          <Transition
                            mounted={inViewportForElementOne}
                            keepMounted
                            transition="slide-right"
                            duration={1000}
                            timingFunction="ease"
                          >
                            {(styles) => (
                              <AspectRatio
                                // display="block"
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
                            <Text
                              mb={theme.spacing?.sm}
                              fw="bold"
                              ta={{ base: 'center', md: 'end' }}
                            >
                              {item.title}
                            </Text>
                            <Text ta={{ base: 'center', md: 'end' }}>{item.text}</Text>
                          </Box>
                        </GridCol>
                        <GridCol
                          span={{ base: 12, md: 5 }}
                          mih={isSmallScreen ? 300 : 200}
                          style={{
                            display: 'flex',
                            justifyContent: isMediumScreen ? 'flex-start' : 'center',
                          }}
                        >
                          <Transition
                            mounted={inViewportForElementOne}
                            keepMounted
                            transition="slide-left"
                            duration={1000}
                            timingFunction="ease"
                          >
                            {(styles) => (
                              <AspectRatio style={styles} w={300} h={300}>
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
        </Container>
        <Container py={theme.spacing?.xl} size="90%">
          <Text mb={theme.spacing?.lg} fw="bold" fz="lg" ta="center">
            {t('values.title')}
          </Text>
          <Center ref={transitionThree}>
            <Grid align="center" justify="center">
              {values.map((item, index) => (
                <GridCol my={theme.spacing?.md} key={index} span={{ base: 12, xs: 6, md: 4 }}>
                  <Center>
                    <Stack align="center" justify="center">
                      <Box mih={isSmallScreen ? 150 : 200}>
                        <Transition
                          mounted={inViewportForElementTwo}
                          transition={
                            index === 0 || !isSmallScreen
                              ? 'slide-right'
                              : index === 1
                                ? 'slide-down'
                                : 'slide-left'
                          }
                          duration={1500}
                          timingFunction="ease"
                          keepMounted
                        >
                          {(styles) => (
                            <Box style={styles} pos="relative">
                              {/* <Badge
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
                              </Badge> */}
                              <AspectRatio
                                style={{
                                  border: 'black',
                                  backgroundColor: 'Background',
                                  borderWidth: 5,
                                  borderRadius: isSmallScreen ? 200 : 150,
                                }}
                                w={isSmallScreen ? 150 : 200}
                                h={isSmallScreen ? 150 : 200}
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
                      </Box>
                      <Box h={isMediumScreen ? 78.3 : '100%'} w={isSmallScreen ? '80%' : '100%'}>
                        <Text mb={theme.spacing?.sm} fw="bold" ta="center">
                          {item.title}
                        </Text>
                        <Text ta="center">{item.desc}</Text>
                      </Box>
                    </Stack>
                  </Center>
                  <Stack></Stack>
                </GridCol>
              ))}
            </Grid>
          </Center>
        </Container>
      </Box>
      <Box py={theme.spacing?.xl} bg={theme.colors?.blue?.[1]}>
        <Container size="90%">
          <Center ref={transitionFour}>
            <Box>
              <Text c="white" fw="bold" fz="lg" ta="center">
                {t('team-title')}
              </Text>
              <Text c="white" ta="center">
                {t('team-subtitle')}
              </Text>
              <Grid
                mt={theme.spacing?.xl}
                gutter={{ base: 'xl', sm: 'sm', md: 'xl' }}
                align="center"
                justify="center"
              >
                {teams.map((item, index) => (
                  <GridCol
                    mih={312.7}
                    my={theme.spacing?.md}
                    key={index}
                    span={{ base: 12, sm: 4 }}
                  >
                    <Center>
                      <Transition
                        mounted={inViewportForElementThree}
                        transition="slide-right"
                        duration={1500}
                        timingFunction="ease"
                        keepMounted
                      >
                        {(styles) => (
                          <Box style={styles}>
                            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                              <AspectRatio
                                style={{
                                  border: 'black',
                                  backgroundColor: 'Background',
                                  borderRadius: 50,
                                }}
                                mt={-50}
                                pos="absolute"
                                w={100}
                                h={100}
                              >
                                <NextImage
                                  style={{ width: '100%', height: '100%', borderRadius: 50 }}
                                  src={item.image}
                                  alt=""
                                />
                              </AspectRatio>
                            </Box>
                            <Center>
                              <Paper
                                className={classes.paper}
                                withBorder
                                pt={theme.spacing?.xl}
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                                shadow="sm"
                                p={theme.spacing?.md}
                                // h={200}
                                // w={261}
                              >
                                <Box w="100%">
                                  <Box
                                    mih={142}
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <Text fs="italic" fz="sm" ta="center">
                                      {item.text}
                                    </Text>
                                  </Box>
                                  <Text fz="md" fw="bold" pt={theme.spacing?.md} ta="center">
                                    {item.title}
                                  </Text>
                                  <Text fz="xs" fw="bold" pt={0} ta="center">
                                    {item.role}
                                  </Text>
                                </Box>
                              </Paper>
                            </Center>
                          </Box>
                        )}
                      </Transition>
                    </Center>
                  </GridCol>
                ))}
              </Grid>
            </Box>
          </Center>
        </Container>
      </Box>
      <Container py="xl" size="90%">
        <Box w="100%">
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
      <ServiceCarousel />
      <ContactSection />
      <MapLocation />
    </>
  );
}
export async function getStaticProps({ locale = 'fr' }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'about-us'])),
    },
  };
}
