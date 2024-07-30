import { Container, Center, Box, Text } from '@mantine/core';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { theme } from '@/theme';
import Header from '@/components/Header/Header';

export default function Terms() {
  const { t } = useTranslation('terms');
  const data = [
    {
      title: t('title1'),
      text: t('text1'),
    },
    {
      title: t('title2'),
      text: t('text2'),
    },
    {
      title: t('title3'),
      text: t('text3'),
    },
    {
      title: t('title4'),
      text: t('text4'),
    },
    {
      title: t('title5'),
      text: t('text5'),
    },
    {
      title: t('title6'),
      text: t('text6'),
    },
    {
      title: t('title7'),
      text: t('text7'),
    },
    {
      title: t('title8'),
      text: t('text8'),
    },
    {
      title: t('title9'),
      text: t('text9'),
    },
    {
      title: t('title10'),
      text: t('text10'),
    },
    {
      title: t('title11'),
      text: t('text11'),
    },
    {
      title: t('title12'),
      text: t('text12'),
    },
    {
      title: t('title13'),
      text: t('text13'),
    },
    {
      title: t('title14'),
      text: t('text14'),
    },
    {
      title: t('title15'),
      text: t('text15'),
    },
    {
      title: t('title16'),
      text: t('text16'),
    },
    {
      title: t('title17'),
      text: t('text17'),
    },
    {
      title: t('title18'),
      text: t('text18'),
    },
    {
      title: t('title19'),
      text: t('text19'),
    },
    {
      title: t('title20'),
      text: t('text20'),
    },
    {
      title: t('title21'),
      text: t('text21'),
    },
    {
      title: t('title22'),
      text: t('text22'),
    },
    {
      title: t('title23'),
      text: t('text23'),
    },
  ];
  return (
    <>
      <Header color />
      <Container pt="15vh" size="90%">
        <Center>
          <Box>
            <Text fw="bold" fz={theme.spacing?.lg} ta="center">
              {t('title')}
            </Text>
            {data.map((item, index) => (
              <Box py={theme.spacing?.md} key={index}>
                <Text ta="center" fw="bold" fz={theme.spacing?.md} c={theme.colors?.blue?.[0]}>
                  {item.title}
                </Text>
                <Text ta="center" fz={theme.spacing?.sm}>
                  {item.text}
                </Text>
              </Box>
            ))}
          </Box>
        </Center>
      </Container>
    </>
  );
}
export async function getStaticProps({ locale = 'fr' }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'terms'])),
    },
  };
}
