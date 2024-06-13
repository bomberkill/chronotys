/* eslint-disable max-len */
import { Box, Center, Container, Grid, Group, Stack, Text } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import NextImage from 'next/image';
import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandMailgun,
  IconBrandWhatsapp,
  IconBrandYoutube,
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
      title: 'Useful Links',
      links: [
        { link: '/about-us', label: t('header-links.about-us') },
        { link: '/services', label: t('header-links.services') },
        { link: '/process', label: t('header-links.how-work') },
      ],
    },
    contact: {
      title: 'get In Touch',
      contactLinks: [
        {
          link: 'https://wa.me/237690655845',
          text: '+237690654585',
          icon: <IconBrandWhatsapp color={theme.colors?.blue?.[8]} stroke={1.5} size={25} />,
        },
        {
          link: 'chrontys@gmail.com',
          text: 'chrontys@gmail.com',
          icon: <IconBrandMailgun color={theme.colors?.blue?.[8]} stroke={1.5} size={25} />,
        },
      ],
    },
  };
  return (
    <Box w="100%" py="10vh" bg="dark.9">
      <Center>

      <footer style={{ width: '90%' }}>
          <Grid w="100%" justify="center" grow align="flex-start">
            <Grid.Col span={{ base: 12, md: 4 }}>
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
              <Center>
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
                        <Text fz="sm">
                          {item.label}
                        </Text>
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
                    {data.contact.contactLinks.map((item, index) => (
                      <Link className={classes.usefullLink} href={item.link} key={index}>
                        <Group>
                          {item.icon}
                          <Text ml={-10} fz="sm">
                            {item.text}
                          </Text>
                        </Group>
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Center>
            </Grid.Col>
          </Grid>
          <Text fz="md" c={theme.colors?.blue?.[9]} pt={theme.spacing?.xl} ta="center">
            {data.copyright}
          </Text>
        <Container w="90%">
        </Container>
      </footer>
      </Center>
    </Box>
  );
};
export default Footer;
