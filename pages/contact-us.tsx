// import { useTranslation } from 'next-i18next';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Center, Container, Grid, GridCol } from '@mantine/core';
import NextImage from 'next/image';
import { useMediaQuery } from '@mantine/hooks';
import ContactForm from '@/components/ContactForm/ContactForm';
import design from '../public/images/MAP.png';
import MapLocation from '@/components/MapLocation/MapLocation';
import { theme } from '@/theme';
import Header from '@/components/Header/Header';

export default function ContactUs() {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <Header color />
      <Container pb={theme.spacing?.xl} style={{ overflow: 'hidden' }} pt="15vh" size="90%">
        <Center>
          <Grid align="center" justify="center">
            <GridCol
              mb={-100}
              display={isLargeScreen ? 'block' : 'none'}
              span={{ base: 12, sm: 6 }}
            >
              <NextImage style={{ width: '100%', height: '100%' }} alt="" src={design} />
              {/* <Image style={{ width: '100%', height: '100%' }} component={NextImage} alt="" display={{ base: 'none', sm: 'block' }} /> */}
            </GridCol>
            <GridCol span={{ base: 12, sm: 6 }}>
              <ContactForm />
            </GridCol>
          </Grid>
        </Center>
      </Container>
      <MapLocation />
    </>
  );
}

export async function getStaticProps({ locale = 'fr' }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact-us'])),
      // Will be passed to the page component as props
    },
  };
}
