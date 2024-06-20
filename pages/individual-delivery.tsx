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
} from '@mantine/core';
import Link from 'next/link';
import NextImage from 'next/image';
import { useTranslation } from 'next-i18next';
// import { useRef, useState } from 'react';
// import Autoplay from 'embla-carousel-autoplay';
// import { useMediaQuery } from '@mantine/hooks';
import { theme } from '@/theme';
import '@mantine/carousel/styles.css';
import classes from './index.module.css';
import fast from '../public/images/fast.png';
import secure from '../public/images/secure.png';
import tracking from '../public/images/tracking.png';
// import livraisonImage from '../public/images/livraison.jpeg';

export default function IndividualDelivery() {
  // const autoplay = useRef(Autoplay({ delay: 2000 }));
  // const [isHovered, setIsHovered] = useState(false);
  // const isLargeScreen = useMediaQuery('(min-width: 790px)');
  const { t } = useTranslation('individual-delivery');
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
              Livraison pour Particuliers
            </Title>
            <Title c="white" fz="lg" ta="center">
              Service rapide et sécurisé à domicile pour vos achats et colis personnels.
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
          <Box w="100%">
            <Text fw="bold" fz="lg" ta="center">
              Key Features
            </Text>
            {features.map((item, index) => {
              const isTextFirst = index % 2 === 0;
              return (
                <Grid my="xs" justify="center" align="center">
                  {isTextFirst ? (
                    <>
                      <GridCol key={index} span={{ base: 12, md: 7 }}>
                        <Box>
                          <Text fw="bold" ta="end">
                            {item.title}
                          </Text>
                          <Text ta="end">{item.text}</Text>
                        </Box>
                      </GridCol>
                      <GridCol span={{ base: 12, md: 5 }}>
                        <AspectRatio w={300} h={300}>
                          <NextImage
                            style={{ width: '100%', height: '100%' }}
                            src={item.image}
                            alt=""
                          />
                        </AspectRatio>
                      </GridCol>
                    </>
                  ) : (
                    <>
                      <GridCol
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                        span={{ base: 12, md: 6 }}
                      >
                        <AspectRatio w={300} h={300}>
                          <NextImage
                            style={{ width: '100%', height: '100%' }}
                            src={item.image}
                            alt=""
                          />
                        </AspectRatio>
                      </GridCol>
                      <GridCol key={index} span={{ base: 12, md: 6 }}>
                        <Box>
                          <Text fw="bold" ta="start">
                            {item.title}
                          </Text>
                          <Text ta="start">{item.text}</Text>
                        </Box>
                      </GridCol>
                    </>
                  )}
                </Grid>
              );
            })}
          </Box>
        </Center>

        <Box py="xl">
          <Text fw="bold" fz="lg" ta="center">
            How It Works
          </Text>
          <Grid gutter="lg" my="xl" justify="center" align="center">
            <GridCol span={4}>
              <Paper shadow="sm" p="md" withBorder>
                <Text fw="bold" ta="center">
                  Place Order
                </Text>
                <Text ta="center">Easily place your order through our user-friendly platform.</Text>
              </Paper>
            </GridCol>
            <GridCol span={4}>
              <Paper shadow="sm" p="md" withBorder>
                <Text fw="bold" ta="center">
                  Package Handling
                </Text>
                <Text ta="center">We handle your package with care once the order is placed.</Text>
              </Paper>
            </GridCol>
            <GridCol span={4}>
              <Paper shadow="sm" p="md" withBorder>
                <Text fw="bold" ta="center">
                  Delivery
                </Text>
                <Text ta="center">Your package is delivered promptly to your doorstep.</Text>
              </Paper>
            </GridCol>
          </Grid>
        </Box>

        <Box py="xl">
          <Text fw="bold" fz="lg" ta="center">
            Benefits
          </Text>
          <Grid gutter="lg" my="xl" justify="center" align="center">
            <GridCol span={4}>
              <Paper shadow="sm" p="md" withBorder>
                <Text fw="bold" ta="center">
                  Convenience
                </Text>
                <Text ta="center">Enjoy the ease and time-saving aspects of our service.</Text>
              </Paper>
            </GridCol>
            <GridCol span={4}>
              <Paper shadow="sm" p="md" withBorder>
                <Text fw="bold" ta="center">
                  Reliability
                </Text>
                <Text ta="center">We have a proven track record of on-time deliveries.</Text>
              </Paper>
            </GridCol>
            <GridCol span={4}>
              <Paper shadow="sm" p="md" withBorder>
                <Text fw="bold" ta="center">
                  Customer Support
                </Text>
                <Text ta="center">Our support team is here to assist you with any queries.</Text>
              </Paper>
            </GridCol>
          </Grid>
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
