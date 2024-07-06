/* eslint-disable max-len */
import { AspectRatio, Box, Center, Container, Grid, Group, Stack, Text } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import NextImage from 'next/image';
import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandMailgun,
  IconBrandYoutube,
  IconLocation,
  IconPhoneCall,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import logo from '../../public/images/chronotys logo.png';
import { theme } from '@/theme';
import classes from './footer.module.css';

const Footer = () => {
  const { t } = useTranslation('common');
  const isSmallScreen = useMediaQuery('(min-width: 576px)');
  const data = {
    copyright: 'Copyright (c) 2024 . Chronotys Express Sarl',
    logo: {
      icon: logo,
      socialMedia: [
        {
          link: 'https://facebook.com',
          icon: <IconBrandFacebook color={theme.colors?.blue?.[8]} stroke={1} size={30} />,
        },
        {
          link: 'https://youtube.com',
          icon: <IconBrandYoutube color={theme.colors?.blue?.[8]} stroke={1} size={30} />,
        },
        {
          link: 'https://linkedin.com',
          icon: <IconBrandLinkedin color={theme.colors?.blue?.[8]} stroke={1} size={30} />,
        },
      ],
    },
    usefulLinks: {
      title: t('usefulLinks'),
      links: [
        { link: '/', label: t('header-links.home') },
        { link: '/individual-delivery', label: t('header-links.individual-delivery') },
        { link: '/merchant-delivery', label: t('header-links.merchant-delivery') },
        { link: '/goods-storage', label: t('header-links.goods-storage') },
        { link: '/contact-us', label: t('header-links.contact-us') },
        { link: '/about-us', label: t('header-links.about-us') },
      ],
    },
    contact: {
      title: t('contact'),
      // {
      //   link: 'https://wa.me/237690655845',
      //   text: '+237690654585',
      //   icon: <IconBrandWhatsapp color={theme.colors?.blue?.[8]} stroke={1.5} size={25} />,
      // },
      locations: [
        {
          text1: 'Douala',
          text2: 'Feu rouge Bessengue Douala, Cameroon +237',
        },
        // {
        //   text1: 'Yaoundé',
        //   text2: 'Biyemassi',
        // },
      ],
      phone: {
        phone1: '6 96 923 169',
        phone2: '6 50 604 020',
        icon: <IconPhoneCall color={theme.colors?.blue?.[8]} stroke={1} size={25} />,
      },
      email: {
        link: 'chronotysexpress@gmail.com',
        text: 'chronotysexpress@gmail.com',
        icon: <IconBrandMailgun color={theme.colors?.blue?.[8]} stroke={1.5} size={25} />,
      },
    },
  };
  return (
    <Box w="100%" py={isSmallScreen ? '10vh' : 'lg'} bg="dark.9">
      <Center>
        <footer style={{ width: '90%' }}>
          <Grid align="flex-start">
            <Grid.Col
              style={{ display: 'flex', justifyContent: isSmallScreen ? 'center' : 'flex-start' }}
              span={{ base: 12, md: 4 }}
            >
              <Box>
                <AspectRatio h={isSmallScreen ? 75 : 60} w={isSmallScreen ? 150 : 130}>
                  <NextImage
                    style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                    src={data.logo.icon}
                    alt="logo"
                  />
                </AspectRatio>
                {/* <AspectRatio w={150} mx="auto">
                    </AspectRatio> */}
                <Group mt={!isSmallScreen ? theme.spacing?.sm : 0} align="center" w="100%">
                  {data.logo.socialMedia.map((item, index) => (
                    <Link
                      className={isSmallScreen ? classes.socialMedia : ''}
                      href={item.link}
                      key={index}
                    >
                      {item.icon}
                    </Link>
                  ))}
                </Group>
              </Box>
              <Center></Center>
            </Grid.Col>
            <Grid.Col
              style={{ display: 'flex', justifyContent: isSmallScreen ? 'center' : 'flex-start' }}
              span={{ base: 12, xs: 6, md: 4 }}
            >
              <Box>
                <Text fz="md" mb={theme.spacing?.md} c={theme.colors?.blue?.[9]} fw="bold">
                  {data.usefulLinks.title}
                </Text>
                <Stack>
                  {data.usefulLinks.links.map((item, index) => (
                    <Link className={classes.usefullLink} href={item.link} key={index}>
                      <Text fz="sm">{item.label}</Text>
                    </Link>
                  ))}
                </Stack>
              </Box>
              <Center></Center>
            </Grid.Col>
            <Grid.Col
              style={{ display: 'flex', justifyContent: isSmallScreen ? 'center' : 'flex-start' }}
              span={{ base: 12, xs: 6, md: 4 }}
            >
              <Box>
                <Text fz="md" mb={theme.spacing?.md} c={theme.colors?.blue?.[9]} fw="bold">
                  {data.contact.title}
                </Text>
                <Stack>
                  <Group>
                    <IconLocation color={theme.colors?.blue?.[8]} stroke={1} size={25} />
                    <Stack gap={0}>
                      {data.contact.locations.map((item, index) => (
                        <Box key={index}>
                          <Text ml={-10} c={theme.colors?.orange?.[0]} fz="md">
                            {item.text1}
                          </Text>
                          <Text ml={-10} c={theme.colors?.blue?.[8]} fz="sm">
                            {item.text2}
                          </Text>
                        </Box>
                      ))}
                    </Stack>
                  </Group>
                  <Group>
                    {data.contact.phone.icon}
                    <Stack gap={0}>
                      <Text ml={-10} c={theme.colors?.blue?.[8]} fz="sm">
                        {data.contact.phone.phone1}
                      </Text>
                      <Text ml={-10} c={theme.colors?.blue?.[8]} fz="sm">
                        {data.contact.phone.phone2}
                      </Text>
                    </Stack>
                  </Group>
                  <Link className={classes.usefullLink} href={data.contact.email.link}>
                    <Group>
                      {data.contact.email.icon}
                      <Text ml={-10} fz="sm">
                        {data.contact.email.text}
                      </Text>
                    </Group>
                  </Link>
                </Stack>
              </Box>
              <Center></Center>
            </Grid.Col>
          </Grid>
          <Text fz="md" c={theme.colors?.blue?.[9]} pt={theme.spacing?.xl} ta="center">
            {data.copyright}
          </Text>
          <Container w="90%"></Container>
        </footer>
      </Center>
    </Box>
  );
};
export default Footer;
