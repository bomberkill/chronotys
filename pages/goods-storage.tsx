import {
  Box,
  Container,
  Title,
  Group,
  Button,
  AspectRatio,
  Center,
  Grid,
  GridCol,
  Transition,
  Text,
  Paper,
  Stack,
} from '@mantine/core';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import NextImage from 'next/image';
import { useIntersection, useMediaQuery } from '@mantine/hooks';
import { useState, useEffect } from 'react';
import { theme } from '@/theme';
import classes from './index.module.css';
import scalable from '../public/images/scalable.png';
import security from '../public/images/security.png';
import climate from '../public/images/climate.png';
import insurance2 from '../public/images/insurance2.png';
import access from '../public/images/access.png';
import savemoney from '../public/images/savemoney.png';
import flex from '../public/images/flex.png';
import customer from '../public/images/customer.png';
import ease from '../public/images/ease.png';
import pack from '../public/images/packaging.png';
import size from '../public/images/size.png';
import access2 from '../public/images/access2.png';
import store from '../public/images/store.png';
import ServiceCarousel from '@/components/ServiceCarousel/ServiceCarousel';
import ContactSection from '@/components/ContactSection/ContactSection';

export default function GoodsStorage() {
  const { t } = useTranslation('goods-storage');
  const isSmallScreen = useMediaQuery('(min-width: 576px)');
  const isMediumScreen = useMediaQuery('(min-width: 992px)');
  const { ref: transitionOne, entry: transitionOneEntry } = useIntersection({
    root: null,
    threshold: 0.9,
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
    threshold: isSmallScreen ? 0.15 : 0.3,
  });
  const [inViewportForElementOne, setInViewportForElementOne] = useState(false);
  const [inViewportForElementTwo, setInViewportForElementTwo] = useState(false);
  const [inViewportForElementThree, setInViewportForElementThree] = useState(false);

  useEffect(() => {
    if (transitionOneEntry?.isIntersecting) {
      setInViewportForElementOne(false);
      setInViewportForElementTwo(false);
    }
    if (transitionTwoEntry?.isIntersecting) {
      setInViewportForElementOne(true);
    }
    if (transitionThreeEntry?.isIntersecting) {
      setInViewportForElementThree(false);
      setInViewportForElementTwo(true);
    }
    if (transitionFourEntry?.isIntersecting) {
      setInViewportForElementThree(true);
    }
  }, [transitionOneEntry, transitionTwoEntry, transitionThreeEntry, transitionFourEntry]);
  const keyFeatures = [
    {
      title: t('flexible-storage-options'),
      text: t('flexible-storage-options-text'),
      image: scalable,
    },
    {
      title: t('advanced-security'),
      text: t('advanced-security-text'),
      image: security,
    },
    {
      title: t('climate-control'),
      text: t('climate-control-text'),
      image: climate,
    },
    {
      title: t('easy-access'),
      text: t('easy-access-text'),
      image: access,
    },
    {
      title: t('insurance-coverage'),
      text: t('insurance-coverage-text'),
      image: insurance2,
    },
  ];
  const benefits = [
    {
      title: t('cost-effective'),
      text: t('cost-effective-text'),
      image: savemoney,
    },
    {
      title: t('scalability'),
      text: t('scalability-text'),
      image: flex,
    },
    {
      title: t('professional-support'),
      text: t('professional-support-text'),
      image: customer,
    },
    {
      title: t('peace-of-mind'),
      text: t('peace-of-mind-text'),
      image: ease,
    },
  ];
  const howItWorks = [
    {
      title: t('step1'),
      text: t('step1-text'),
      image: size,
    },
    {
      title: t('step2'),
      text: t('step2-text'),
      image: pack,
    },
    {
      title: t('step3'),
      text: t('step3-text'),
      image: store,
    },
    {
      title: t('step4'),
      text: t('step4-text'),
      image: access2,
    },
  ];
  return (
    <>
      <Box
        pt="15vh"
        h={{ base: '80vh', sm: '80vh', lg: '100vh' }}
        w="100%"
        className={classes.storageBanner}
        ref={transitionOne}
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
            <Title
              c={theme.colors?.orange?.[0]}
              fz={{ base: 'lg', xs: 'xl' }}
              fw="bold"
              ta="center"
            >
              {t('title')}
            </Title>
            <Title c="white" fz={{ base: 'md', xs: 'lg' }} ta="center">
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
                <Button h="50px" w="190px" color={theme.colors?.orange?.[0]}>
                  {t('order')}
                </Button>
              </Link>
            </Group>
          </Box>
        </Container>
      </Box>
      <Box bg="dark.9">
        <Container py="xl" size="80%">
          <Center ref={transitionTwo}>
            <Box w="100%">
              <Text c="white" fw="bold" fz="lg" ta="center">
                {t('key-features')}
              </Text>
              <Grid my={theme.spacing?.lg} justify="center" align="center">
                {keyFeatures.map((item, index) => (
                  <GridCol mih={450.4} key={index} span={{ base: 12, md: 4 }}>
                    <Transition
                      mounted={inViewportForElementOne}
                      transition={index < 3 ? 'slide-left' : 'slide-right'}
                      duration={1000}
                      timingFunction="ease"
                      keepMounted
                    >
                      {(styles) => (
                        <Center style={styles}>
                          <Paper
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}
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
            </Box>
          </Center>
        </Container>
      </Box>
      <Box py="xl">
        <Container ref={transitionThree} size="80%">
          <Text fw="bold" fz="lg" ta="center">
            {t('benefits')}
          </Text>
          {benefits.map((item, index) => {
            const isTextFirst = index % 2 === 0;
            return (
              <Grid my={theme.spacing?.lg} justify="center" align="center">
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
                        <Text mb={theme.spacing?.sm} fw="bold" ta={{ base: 'center', md: 'start' }}>
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
        </Container>
      </Box>
      <ServiceCarousel />
      <Box py="xl">
        <Container ref={transitionFour} size="80%">
          <Text fw="bold" fz="lg" ta="center">
            {t('how-it-works')}
          </Text>
          <Grid my={theme.spacing?.lg} justify="center" align="center">
            {howItWorks.map((item, index) => (
              <GridCol mih={450.4} key={index} span={{ base: 12, sm: 6 }}>
                <Transition
                  mounted={inViewportForElementThree}
                  transition={!isSmallScreen ? 'slide-left' : index % 2 ? 'slide-up' : 'slide-down'}
                  duration={1500}
                  timingFunction="ease"
                  keepMounted
                >
                  {(styles) => (
                    <Center style={styles}>
                      <Paper
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        w={{ xs: '100%', sm: '90%', md: '80%', lg: '70%' }}
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
      <ContactSection />
    </>
  );
}
export async function getStaticProps({ locale = 'fr' }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'goods-storage'])),
      // Will be passed to the page component as props
    },
  };
}
