// import { useTranslation } from 'next-i18next';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Container, Grid, GridCol } from '@mantine/core';
import NextImage from 'next/image';
import ContactForm from '@/components/ContactForm/ContactForm';
import design from '../public/images/MAP.png';

const ContactUs = () => (
  // const { t } = useTranslation('contact-us');
  <>
    <Container style={{ overflow: 'hidden' }} pt="15vh" size="90%">
      <Grid align="center" justify="center">
        <GridCol span={{ base: 12, sm: 6 }}>
          <NextImage style={{ width: '100%', height: '100%' }} alt="" src={design} />
          {/* <Image style={{ width: '100%', height: '100%' }} component={NextImage} alt="" display={{ base: 'none', sm: 'block' }} /> */}
        </GridCol>
        <GridCol span={{ base: 12, sm: 6 }}>
          <ContactForm />
        </GridCol>
      </Grid>
    </Container>
  </>
);

export async function getStaticProps({ locale = 'fr' }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact-us'])),
      // Will be passed to the page component as props
    },
  };
}

export default ContactUs;
