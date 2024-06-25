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
  Transition,
} from '@mantine/core';
import Link from 'next/link';
import NextImage from 'next/image';
import { useTranslation } from 'next-i18next';
// import { useState } from 'react';
// import Autoplay from 'embla-carousel-autoplay';
// import { useMediaQuery } from '@mantine/hooks';
import { useInViewport, useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { theme } from '@/theme';
import '@mantine/carousel/styles.css';
import classes from './index.module.css';
import flex from '../public/images/flex.png';
import insurance from '../public/images/insurance.png';
import performance from '../public/images/performance.png';
import satisfaction from '../public/images/satisfaction.png';
import logictics from '../public/images/logictics.png';
import expansion from '../public/images/expansion.png';
import ServiceCarousel from '@/components/ServiceCarousel/ServiceCarousel';
import ContactSection from '@/components/ContactSection/ContactSection';
import user1 from '../public/images/user1.png';
import user2 from '../public/images/user2.png';
import user3 from '../public/images/user3.png';

export default function IndividualDelivery() {
  const isSmallScreen = useMediaQuery('(min-width: 576px)');
  const { t } = useTranslation('merchant-delivery');
  const { ref: refForElementOne } = useInViewport();
  const { ref: refForElementTwo } = useInViewport();
  const { ref: refForElementThree } = useInViewport();
  const [inViewportForElementOne, setInViewportForElementOne] = useState(false);
  const [inViewportForElementTwo, setInViewportForElementTwo] = useState(false);
  const [inViewportForElementThree, setInViewportForElementThree] = useState(false);
  const isMediumScreen = useMediaQuery('(min-width: 992px)');

  const features = [
    {
      title: t('flexible'),
      text: t('flexible-text'),
      image: flex,
    },
    {
      title: t('insurance'),
      text: t('insurance-text'),
      image: insurance,
    },
    {
      title: t('performance'),
      text: t('performance-text'),
      image: performance,
    },
  ];
  const testimonials = [
    {
      title: t('testimonial1-name'),
      text: t('testimonial1-text'),
      role: t('testimonial1-activity'),
      image: user1,
    },
    {
      title: t('testimonial2-name'),
      text: t('testimonial2-text'),
      role: t('testimonial2-activity'),
      image: user2,
    },
    {
      title: t('testimonial3-name'),
      text: t('testimonial3-text'),
      role: t('testimonial3-activity'),
      image: user3,
    },
  ];
  const Benefits = [
    {
      title: t('customer-satisfaction'),
      text: t('customer-satisfaction-text'),
      image: satisfaction,
    },
    {
      title: t('simplified-logistics'),
      text: t('simplified-logistics-text'),
      image: logictics,
    },
    {
      title: t('market-expansion'),
      text: t('market-expansion-text'),
      image: expansion,
    },
  ];
  return (
    <>
      <Box
        pt="15vh"
        h={{ base: '80vh', sm: '80vh', lg: '100vh' }}
        w="100%"
        className={classes.individualBanner}
        onMouseEnter={() => {
          setInViewportForElementTwo(false);
        }}
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
        <Center
          onMouseEnter={() => {
            setInViewportForElementThree(false);
            setInViewportForElementTwo(true);
          }}
        >
          <Box ref={refForElementTwo} w="100%">
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
                        mih={isSmallScreen ? 300 : 200}
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
                          <Text mb={theme.spacing?.sm} fw="bold" ta={{ base: 'center', md: 'end' }}>
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
                          mounted={inViewportForElementTwo}
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
      <Box
        onMouseEnter={() => {
          setInViewportForElementThree(true);
        }}
        bg={theme.colors?.blue?.[1]}
        py="xl"
      >
        <Text mb={theme.spacing?.lg} c="white.0" fw="bold" fz="lg" ta="center">
          {t('benefits')}
        </Text>
        <Container
          onMouseEnter={() => {
            setInViewportForElementOne(false);
          }}
          size="80%"
        >
          <Grid ref={refForElementThree} justify="center" align="center">
            {Benefits.map((item, index) => (
              <GridCol mih={450.4} key={index} span={{ base: 12, md: 4 }}>
                <Transition
                  mounted={inViewportForElementThree}
                  transition={index % 2 ? 'slide-up' : 'slide-down'}
                  duration={1500}
                  timingFunction="ease"
                  keepMounted
                >
                  {(styles) => (
                    <Center style={styles}>
                      <Paper
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        w={{ xs: '100%', sm: '90%', md: '100%', lg: '90%' }}
                        radius="lg"
                        shadow="lg"
                        p={theme.spacing?.lg}
                        mih={434.4}
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
      <Container py="xl" size="90%">
        <Center
          onMouseEnter={() => {
            setInViewportForElementOne(true);
          }}
          pt={theme.spacing?.lg}
        >
          <Box>
            <Text w="bold" fz="lg" ta="center">
              {t('testimonials-title')}
            </Text>
            <Text ta="center">{t('testimonials-subtitle')}</Text>
            <Grid
              mt={theme.spacing?.xl}
              ref={refForElementOne}
              gutter={{ base: 'xl', sm: 'sm', md: 'xl' }}
              align="center"
              justify="center"
            >
              {testimonials.map((item, index) => (
                <GridCol mih={312.7} my={theme.spacing?.md} key={index} span={{ base: 12, sm: 4 }}>
                  <Center>
                    <Transition
                      mounted={inViewportForElementOne}
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
                            {/* <Badge
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
                            </Badge> */}
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
      <ServiceCarousel />
      <ContactSection />
    </>
  );
}

export async function getStaticProps({ locale = 'fr' }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'merchant-delivery'])),
    },
  };
}
