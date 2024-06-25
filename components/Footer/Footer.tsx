/* eslint-disable max-len */
import { Box, Center, Container, Grid, Group, Stack, Text } from '@mantine/core';
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
import logo from '../../public/images/chronotys logo.png';
import { theme } from '@/theme';
import classes from './footer.module.css';

const Footer = () => {
  const { t } = useTranslation('common');
  const data = {
    copyright: 'Copyright (c) 2024 . Chronotys',
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
        { link: '/about-us', label: t('header-links.about-us') },
        { link: '/services', label: t('header-links.services') },
        { link: '/process', label: t('header-links.how-work') },
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
          text2: 'Bonamoussadi',
        },
        {
          text1: 'Yaoundé',
          text2: 'Biyemassi',
        },
      ],
      phone: {
        phone1: '6 93 817 886',
        phone2: '6 98 232 355',
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
    <Box w="100%" py="10vh" bg="dark.9">
      <Center>
        <footer style={{ width: '90%' }}>
          <Grid w="100%" justify="center" grow align="flex-start">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Center>
                <Box>
                  <NextImage
                    style={{ objectFit: 'contain', height: 75, width: 150 }}
                    src={data.logo.icon}
                    alt="logo"
                  />
                  {/* <AspectRatio w={150} mx="auto">
                    </AspectRatio> */}
                  <Group align="center" w="100%">
                    {data.logo.socialMedia.map((item, index) => (
                      <Link className={classes.socialMedia} href={item.link} key={index}>
                        {item.icon}
                      </Link>
                    ))}
                  </Group>
                </Box>
              </Center>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 6, md: 4 }}>
              <Center>
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
              </Center>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 6, md: 4 }}>
              <Center>
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
              </Center>
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
