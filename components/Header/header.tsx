/* eslint-disable react/no-unknown-property */
/* eslint-disable max-len */
import { Container, Group, Burger, rem, Drawer, Text, Box, Stack } from '@mantine/core';
import NextImage from 'next/image';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import logo from '../../public/images/chronotys logo.png';
import { theme } from '@/theme';
import classes from './header.module.css';

const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  // const [active, setActive] = useState(links[0].link);
  const { t, i18n } = useTranslation('common');
  const links = [
    { link: '/about-us', label: t('header-links.about-us') },
    { link: '/services', label: t('header-links.services') },
    { link: '/process', label: t('header-links.how-work') },
  ];
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.usefullLink}
    >
      <Text fw="bold" py={rem(12)} px={rem(8)}>
        {link.label}
      </Text>
    </Link>
  ));
  const [isfrench, setIsFrench] = useState(true);
  const router = useRouter();
  const isSmallScreen = useMediaQuery('(min-width: 576px)');

  const changeLang = (lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  useEffect(() => {
    i18n.language === 'fr' ? setIsFrench(true) : setIsFrench(false);
  }, [i18n.language]);

  return (
    <Box style={{ position: 'fixed', zIndex: 100000 }}>
      <style jsx>
        {`
          .link {
            textDecoration: 'none';
          }
          .link:hover {
            color: '#1D70BE';
          }
        `}
      </style>
      <header style={{ boxShadow: '2px 2px 2px 0 rgba(0, 0, 0, 0.3)', height: '15vh', backgroundColor: 'white', width: '100%', position: 'fixed', top: 0 }}>
        <Container py="1%" h="15vh" size="90%" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box py={theme.spacing?.sm} mr={theme.spacing?.xl} w={150} style={{ position: 'relative', height: '100%' }}>
            <NextImage layout="fill" objectFit="contain" objectPosition="center" src={logo} alt="logo" />
          </Box>
          <Group align="center" justify="flex-end">
            {isSmallScreen && (
            <Group>
              <Text
                style={{ cursor: 'pointer', color: 'black' }}
                fz={16}
                fw={600}
                ff={theme.fontFamily}
                onClick={() => changeLang('fr')}
                c={isfrench ? theme.colors?.blue?.[0] : 'black'}
              >
                FR
              </Text>
              <Text
                style={{ cursor: 'pointer' }}
                fz={16}
                fw={600}
                ff={theme.fontFamily}
                c="black"
              >
                |
              </Text>
              <Text
                style={{ cursor: 'pointer' }}
                fz={16}
                fw={600}
                ff={theme.fontFamily}
                onClick={() => changeLang('en')}
                c={isfrench ? 'black' : theme.colors?.blue?.[0]}
              >
                EN
              </Text>
            </Group>
            )}
            <Box onClick={toggle} w={50} h={50} style={{ borderRadius: 25, backgroundColor: theme.colors?.blue?.[1], display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
              <Burger opened={opened} onClick={toggle} hidden={false} size="sm" />
            </Box>
          </Group>
        </Container>
      </header>
      <Drawer c={theme.colors?.blue?.[8]} position="right" overlayProps={{ backgroundOpacity: 0.5, blur: 4 }} size={300} opened={opened} onClose={close}>
        <Stack gap={5} align="center" justify="center">
          {items}
          {!isSmallScreen && (
            <Group>
              <Text
                style={{ cursor: 'pointer', color: 'black' }}
                fz={16}
                fw={600}
                ff={theme.fontFamily}
                onClick={() => changeLang('fr')}
                c={isfrench ? theme.colors?.blue?.[0] : 'black'}
              >
                FR
              </Text>
              <Text
                style={{ cursor: 'pointer' }}
                fz={16}
                fw={600}
                ff={theme.fontFamily}
                c="black"
              >
                |
              </Text>
              <Text
                style={{ cursor: 'pointer' }}
                fz={16}
                fw={600}
                ff={theme.fontFamily}
                onClick={() => changeLang('en')}
                c={isfrench ? 'black' : theme.colors?.blue?.[0]}
              >
                EN
              </Text>
            </Group>
          )}
        </Stack>
      </Drawer>
    </Box>
  );
};
export default Header;
