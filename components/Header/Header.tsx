/* eslint-disable react/no-unknown-property */
/* eslint-disable max-len */
import {
  Container,
  Group,
  Burger,
  rem,
  Drawer,
  Text,
  Box,
  Stack,
  AspectRatio,
} from '@mantine/core';
import NextImage from 'next/image';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { IconCaretDown, IconCaretUp } from '@tabler/icons-react';
import logo from '../../public/images/chronotys logo.png';
import { theme } from '@/theme';
import classes from './header.module.css';

const Header = (props: { fixed?: boolean; position?: boolean; color?: boolean }) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  // const [active, setActive] = useState(links[0].link);
  const { t, i18n } = useTranslation('common');
  const links = [
    { link: '/', label: t('header-links.home') },
    { link: '', label: t('header-links.services') },
    // { link: '/how-it-works', label: t('header-links.how-work') },
    { link: '/about-us', label: t('header-links.about-us') },
    { link: '/contact-us', label: t('header-links.contact-us') },
  ];
  const services = [
    { link: '/individual-delivery', label: t('service-links.individual') },
    { link: '/merchant-delivery', label: t('service-links.merchant') },
    { link: '/goods-storage', label: t('service-links.storage') },
  ];
  const items = links.map((link, index) => {
    if (index === 1) {
      return (
        <>
          <Group
            style={{ cursor: 'pointer' }}
            gap={2}
            align="center"
            justify="center"
            onClick={() => setShowServices(!showServices)}
            key={index}
            className={classes.usefullLink}
          >
            <Text ta="center" py={rem(5)} px={rem(8)}>
              {link.label}
            </Text>
            {!showServices ? <IconCaretDown /> : <IconCaretUp />}
          </Group>
          {showServices && (
            <Stack w="90%" gap={5} align="center" justify="center">
              {services.map((service, serviceIndex) => (
                <Link key={serviceIndex} href={service.link} className={classes.usefullLink}>
                  <Text fz="sm" ta="center" py={rem(5)} px={rem(8)}>
                    {service.label}
                  </Text>
                </Link>
              ))}
            </Stack>
          )}
        </>
      );
    }
    return (
      <Link key={index} href={link.link} className={classes.usefullLink}>
        <Text ta="center" py={rem(5)} px={rem(8)}>
          {link.label}
        </Text>
      </Link>
    );
  });
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      pos={!isSmallScreen ? 'relative' : scrolled || props.position ? 'fixed' : 'relative'}
      style={{ zIndex: 100 }}
    >
      <header
        style={{
          boxShadow: scrolled ? '2px 2px 2px 0 rgba(0, 0, 0, 0.3)' : '',
          height: isSmallScreen ? '15vh' : '10vh',
          backgroundColor: !props.color && !scrolled ? 'transparent' : 'white',
          width: '100%',
          position: 'fixed',
          top: 0,
        }}
      >
        <Container
          py="1%"
          h={isSmallScreen ? '15vh' : '10vh'}
          size="90%"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Link href="/">
            <AspectRatio h={isSmallScreen ? 75 : 60} w={isSmallScreen ? 150 : 130}>
              <NextImage
                style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                src={logo}
                alt="logo"
              />
            </AspectRatio>
          </Link>
          <Group align="center" justify="flex-end">
            {isSmallScreen && (
              <Group>
                <Text
                  style={{ cursor: 'pointer', color: 'black' }}
                  fz="sm"
                  fw={600}
                  ff={theme.fontFamily}
                  onClick={() => changeLang('fr')}
                  c={
                    isfrench
                      ? theme.colors?.orange?.[0]
                      : !props.color && !scrolled
                        ? 'white'
                        : 'black'
                  }
                >
                  FR
                </Text>
                <Text
                  style={{ cursor: 'pointer' }}
                  fz="sm"
                  fw={600}
                  ff={theme.fontFamily}
                  c={!props.color && !scrolled ? 'white' : 'black'}
                >
                  |
                </Text>
                <Text
                  style={{ cursor: 'pointer' }}
                  fz="sm"
                  fw={600}
                  ff={theme.fontFamily}
                  onClick={() => changeLang('en')}
                  c={
                    isfrench
                      ? !props.color && !scrolled
                        ? 'white'
                        : 'black'
                      : theme.colors?.orange?.[0]
                  }
                >
                  EN
                </Text>
              </Group>
            )}
            <Box
              onClick={toggle}
              w={50}
              h={50}
              style={{
                borderRadius: 25,
                backgroundColor: theme.colors?.blue?.[1],
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <Burger
                color={theme.colors?.blue?.[9]}
                opened={opened}
                onClick={toggle}
                hidden={false}
                size="sm"
              />
            </Box>
          </Group>
        </Container>
      </header>
      <Drawer
        c={theme.colors?.blue?.[8]}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        size={300}
        opened={opened}
        onClose={close}
      >
        <Stack w="100%" gap={5} align="center" justify="center">
          {items}
          {!isSmallScreen && (
            <Group>
              <Text
                style={{ cursor: 'pointer', color: 'black' }}
                fz="sm"
                fw={600}
                ff={theme.fontFamily}
                onClick={() => changeLang('fr')}
                c={isfrench ? theme.colors?.blue?.[0] : 'black'}
              >
                FR
              </Text>
              <Text style={{ cursor: 'pointer' }} fz="sm" fw={600} ff={theme.fontFamily} c="black">
                |
              </Text>
              <Text
                style={{ cursor: 'pointer' }}
                fz="sm"
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
